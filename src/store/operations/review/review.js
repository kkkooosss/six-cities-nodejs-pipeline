import ActionCreator from '../../actions/review/review';
import {formatReviews} from '../../../helpers/utils';

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
        dispatch(ActionCreator.setSendingFlag(false));
        dispatch(ActionCreator.setErrorFlag(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setErrorFlag(true));
        dispatch(ActionCreator.setSendingFlag(false));
        throw err;
      });
  },

};

export default Operation;
