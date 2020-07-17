import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import ReviewTypes from '../../types/review.js';
import {connect} from 'react-redux';
import OfferTypes from '../../types/offer.js';

import {AuthorizationStatus} from '../../store/reducers/user/user.js';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors.js';
import ReviewOperation from '../../store/operations/review/review.js';
import ReviewForm from '../review-form/review-form.jsx';

import {store} from '../../index.js';
import {getReviews} from '../../store/reducers/review/selectors.js';

class ReviewsList extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {id} = this.props.offer;
    store.dispatch(ReviewOperation.loadReviews(id));
  }

  render() {
    const {offer, reviews} = this.props;
    const reviewsCount = this.props.reviews.length;
    const isAuthorized = this.props.authorizationStatus === AuthorizationStatus.AUTH;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>

        <ul className="reviews__list">
          {reviews.map((review) => <Review review={review} key={review.id} />)}
        </ul>

        <ReviewForm offer={offer} />

        {/* {isAuthorized ? <ReviewForm offer={this.props.offer} /> : null} */}

      </section>
    );
  }

}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  reviews: getReviews(state)
});

export default connect(mapStateToProps, null)(ReviewsList);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  offer: OfferTypes.isRequired,
};
