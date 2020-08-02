import * as React from 'react';
import PropTypes from 'prop-types';

import ReviewTypes from '../../types/review';

import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

const ReviewsList = ({offerId, reviews, isAuthorized}) => {

  const reviewsCount = reviews.length;

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
  isAuthorized: PropTypes.bool.isRequired,
  offerId: PropTypes.number.isRequired,
};
