import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import OfferTypes from '../../types/offer.js';
import {CITIES, MAP_SETTINGS} from '../../helpers/constants.js';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markers = [];
    this._zoom = MAP_SETTINGS.zoom;
    this._mapRef = React.createRef();
  }

  _setMap(city) {
    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
  }

  _setView(city) {
    this._map.setView(city, this._zoom);
  }

  _setLayer() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }

  _setMarkers(offers) {
    const {icon} = MAP_SETTINGS;

    offers.map((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map);
    });
  }

  _setCurrentOfferMarker(currentOffer) {
    const {currentOfferIcon} = MAP_SETTINGS;

    leaflet
      .marker(currentOffer.coordinates, {currentOfferIcon})
      .addTo(this._map);
  }

  _removeMarkers() {
    if (this._map !== null) {
      this._markers.forEach((marker) => {
        this._map.removeLayer(marker);
      });
    }
  }

  componentDidMount() {
    const {offers, currentOffer, selectedCity} = this.props;
    const city = CITIES[selectedCity];

    this._setMap(city);
    this._setView(city);
    this._setLayer();
    this._setMarkers(offers);

    if (currentOffer) {
      this._setCurrentOfferMarker(currentOffer);
    }
  }

  componentDidUpdate() {
    const {offers, currentOffer, selectedCity} = this.props;
    const city = CITIES[selectedCity];

    this._removeMarkers();
    this._setView(city);
    this._setLayer();
    this._setMarkers(offers);

    if (currentOffer) {
      this._setCurrentOfferMarker(currentOffer);
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    const {isPropertyMap} = this.props;
    return (
      <section className={`map ${isPropertyMap ? `property__map` : `cities__map` }`} id="map" ref={this._mapRef}></section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity
});

export {Map};
export default connect(mapStateToProps, null)(Map);

Map.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  isPropertyMap: PropTypes.bool.isRequired,
  currentOffer: PropTypes.arrayOf(OfferTypes.isRequired)
};

Map.defaultProps = {
  cityTitle: `Amsterdam`
};
