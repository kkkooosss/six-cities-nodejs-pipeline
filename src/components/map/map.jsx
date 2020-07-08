import React from 'react';
import PropTypes from 'prop-types';
import withMap from '../../hocs/with-map/with-map.jsx';

const Map = ({isPropertyMap, mapRef}) => (
  <section
    className={`map ${isPropertyMap ? `property__map` : `cities__map` }`}
    id="map"
    ref={mapRef}
  >
  </section>
);

export default withMap(Map);

Map.propTypes = {
  isPropertyMap: PropTypes.bool.isRequired,
  mapRef: PropTypes.object.isRequired
};
