import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import ReviewTypes from '../../types/review.js';
import {connect} from 'react-redux';

import {AuthorizationStatus} from '../../store/reducers/user/user.js';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors.js';

import ReviewForm from '../review-form/review-form.jsx';

const ReviewsList = ({reviews, authorizationStatus}) => {

  const reviewsCount = reviews.length;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>

      {isAuthorized ? <ReviewForm /> : null}

    </section>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export default connect(mapStateToProps, null)(ReviewsList);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  authorizationStatus: PropTypes.string.isRequired
};
