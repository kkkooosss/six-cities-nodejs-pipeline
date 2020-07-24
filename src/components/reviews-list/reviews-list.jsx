import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import ReviewTypes from '../../types/review.js';
import {connect} from 'react-redux';

import {AuthStatus} from '../../helpers/constants.js';
import {getAuthStatus} from '../../store/reducers/user/selectors.js';
import ReviewForm from '../review-form/review-form.jsx';

import {getReviews} from '../../store/reducers/review/selectors.js';

class ReviewsList extends React.PureComponent {

  componentDidMount() {
    const {offerId, onRequestReviews} = this.props;
    onRequestReviews(offerId);
  }

  render() {
    const {offerId, reviews} = this.props;
    const reviewsCount = this.props.reviews.length;
    const isAuthorized = this.props.authorizationStatus === AuthStatus.auth;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>

        <ul className="reviews__list">
          {reviews.map((review) => <Review review={review} key={review.id} />)}
        </ul>

        {isAuthorized ? <ReviewForm offerId={offerId} /> : null}

      </section>
    );
  }

}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
  reviews: getReviews(state)
});

export {ReviewsList};

export default connect(mapStateToProps, null)(ReviewsList);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  onRequestReviews: PropTypes.func.isRequired
};
