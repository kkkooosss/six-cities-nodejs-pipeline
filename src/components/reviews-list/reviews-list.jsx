import React from 'react';
import PropTypes from 'prop-types';

import ReviewTypes from '../../types/review.js';
import {AuthStatus} from '../../helpers/constants.js';

import Review from '../review/review.jsx';
import ReviewForm from '../review-form/review-form.jsx';

const ReviewsList = ({offerId, reviews, authStatus}) => {

  const reviewsCount = reviews.length;
  const isAuthorized = authStatus === AuthStatus.auth;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>

      {isAuthorized ? <ReviewForm offerId={offerId} /> : null}

    </section>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  authStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
};
