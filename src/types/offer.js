import PropTypes from 'prop-types';

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  city: PropTypes.exact({
    name: PropTypes.string.isRequired,
    location: PropTypes.exact({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    })
  }),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    userPic: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired
});
