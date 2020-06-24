import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferTypes} from '../../types/offers.js';

const city = [52.38333, 4.9];
const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
        .addTo(this.map);

    const {offers} = this.props;

    offers.map((offer) => leaflet.marker(offer.coordinates, {icon}).addTo(this.map));
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }
}

export default Map;

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired
};
