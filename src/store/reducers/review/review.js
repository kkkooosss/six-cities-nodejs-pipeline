import {extend} from '../../../helpers/helpers.js';
import {Actions} from '../../actions/review/review.js';

const initialState = {
  reviews: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Actions.getReviews:
      return extend(state, {
        reviews: action.payload
      });
  }

  return state;
};

export default reducer;
