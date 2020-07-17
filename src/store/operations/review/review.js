import ActionCreator from '../../actions/review/review.js';
import {formatReviews} from '../../../helpers/helpers.js';

const Operation = {
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then(
          (response) => {
            dispatch(ActionCreator.getReviews(formatReviews(response.data)));
          });
  },

  submitReview: (offerId, reviewData) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, {
      comment: reviewData.text,
      rating: reviewData.rating
    })
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
      });
  }
};

export default Operation;
