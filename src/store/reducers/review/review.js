import {extend} from '../../../helpers/utils.js';
import {Actions} from '../../actions/review/review.js';

const initialState = {
  reviews: [],
  sending: false,
  error: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.getReviews:
      return extend(state, {
        reviews: action.payload
      });

    case Actions.setSendingFlag:
      return extend(state, {
        sending: action.payload
      });

    case Actions.setErrorFlag:
      return extend(state, {
        error: action.payload
      });

  }

  return state;
};

export default reducer;
