import PropTypes from 'prop-types';

export default PropTypes.exact({
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  isPro: PropTypes.bool
});
