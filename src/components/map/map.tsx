import * as React from 'react';
import * as leaflet from 'leaflet';
import {connect} from 'react-redux';

import {CITIES, MAP_SETTINGS} from '../../helpers/constants';
import {getSelectedCity} from '../../store/reducers/filter/selectors';
import {getActiveOffer} from '../../store/reducers/active/selectors';
import Offer from '../../interfaces/offer';

interface Props {
  selectedCity: string;
  offers: Offer[];
  isPropertyMap: boolean;
  currentOffer: Offer;
  activeOffer: Offer;
}

class Map extends React.PureComponent<Props, {}> {
  private _map;
  private _mapRef;
  private _markers;
  private _zoom;

  constructor(props) {
    super(props);

    this._map = null;
    this._mapRef = React.createRef();
    this._markers = [];
    this._zoom = MAP_SETTINGS.zoom;

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

    offers.forEach(({id, location}) => {
      const coordinates = [location.latitude, location.longitude];
      const marker = leaflet.marker(coordinates, {icon});
      marker.addTo(this._map);
      this._markers.push({id, marker});
    });
  }

  _setCurrentOfferMarker({location}) {
    const icon = MAP_SETTINGS.currentOfferIcon;
    const coordinates = [location.latitude, location.longitude];

    const marker = leaflet.marker(coordinates, {icon});
    marker.addTo(this._map);
    this._markers.push({marker});
  }

  _removeMarkers() {
    this._markers.forEach(({marker}) => marker.remove());
    this._markers = [];
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
    const {offers, currentOffer, activeOffer, selectedCity} = this.props;
    const city = CITIES[selectedCity];

    this._removeMarkers();
    this._setView(city);
    this._setLayer();
    this._setMarkers(offers);

    if (currentOffer) {
      this._setCurrentOfferMarker(currentOffer);
    }

    if (activeOffer) {
      this._setCurrentOfferMarker(activeOffer);
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    const isPropertyMap = this.props;
    return (
      <section
        className={`map ${isPropertyMap ? `property__map` : `cities__map` }`}
        id="map"
        ref={this._mapRef}>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state),
  activeOffer: getActiveOffer(state)
});

export default connect(mapStateToProps, null)(Map);
