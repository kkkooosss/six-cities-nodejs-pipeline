import ActionCreator from '../../actions/review/review.js';
import {formatReviews} from '../../../helpers/utils.js';

const Operation = {
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then(
          (response) => {
            dispatch(ActionCreator.getReviews(formatReviews(response.data)));
          });
  },

  submitReview: (offerId, {rating, text}) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, {
      rating,
      comment: text
    })
      .then((response) => {
        dispatch(ActionCreator.getReviews(formatReviews(response.data)));
        dispatch(ActionCreator.setSendingFlag(true));
        dispatch(ActionCreator.setErrorFlag(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setErrorFlag(true));
        throw err;
      });
  },

};

export default Operation;
