import * as React from 'react';


import ReviewCard from '../review/review-card';
import ReviewForm from '../review-form/review-form';
import Review from '../../interfaces/review';

interface Props {
  reviews: Review[];
  isAuthorized: boolean;
  offerId: number;
}

const ReviewsList = (props: Props) => {
  const {offerId, reviews, isAuthorized} = props;

  const reviewsCount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => <ReviewCard review={review} key={review.id} />)}
      </ul>

      {isAuthorized ? <ReviewForm offerId={offerId} /> : null}

    </section>
  );
};

export default ReviewsList;
