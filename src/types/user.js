import PropTypes from 'prop-types';

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired
});
