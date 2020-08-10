import * as React from 'react';
import * as leaflet from 'leaflet';
import {connect} from 'react-redux';

import {MapSettings} from '../../helpers/constants';
import {getActiveOffer} from '../../store/reducers/active/selectors';
import Offer from '../../interfaces/offer';
import City from '../../interfaces/city';

interface Props {
  offers: Offer[];
  isPropertyMap: boolean;
  currentOffer: Offer;
  activeOffer: Offer;
  offerCity: City;
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
    this._zoom = MapSettings.ZOOM;

  }

  componentDidMount() {
    const {offers, offerCity, currentOffer, isPropertyMap} = this.props;

    if (isPropertyMap) {
      const {latitude, longitude} = offerCity.location;
      const city = [latitude, longitude];
      this._mountMap(city, offers);
    } else {
      const {latitude, longitude} = offers[0].city.location;
      const city = [latitude, longitude];
      this._mountMap(city, offers);
    }

    if (currentOffer) {
      this._setCurrentOfferMarker(currentOffer);
    }
  }

  componentDidUpdate() {
    const {offers, currentOffer, activeOffer} = this.props;
    const {latitude, longitude} = offers[0].city.location;
    const city = [latitude, longitude];

    this._updateMap(city, offers);

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

  _mountMap(city, offers) {
    this._setMap(city);
    this._setView(city);
    this._setLayer();
    this._setMarkers(offers);
  }

  _updateMap(city, offers) {
    this._removeMarkers();
    this._setView(city);
    this._setLayer();
    this._setMarkers(offers);
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
    const icon = MapSettings.ICON;

    offers.forEach(({id, location}) => {
      const coordinates = [location.latitude, location.longitude];
      const marker = leaflet.marker(coordinates, {icon});
      marker.addTo(this._map);
      this._markers.push({id, marker});
    });
  }

  _setCurrentOfferMarker({location}) {
    const icon = MapSettings.CURRENT_OFFER_ICON;
    const coordinates = [location.latitude, location.longitude];

    const marker = leaflet.marker(coordinates, {icon});
    marker.addTo(this._map);
    this._markers.push({marker});
  }

  _removeMarkers() {
    this._markers.forEach(({marker}) => marker.remove());
    this._markers = [];
  }

  render() {
    const {isPropertyMap} = this.props;
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
  activeOffer: getActiveOffer(state)
});

export default connect(mapStateToProps, null)(Map);
