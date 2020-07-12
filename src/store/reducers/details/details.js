import {extend} from '../../../helpers/helpers.js';
import {Actions} from '../../actions/details/details.js';

const initialState = {
  detailsOffer: null
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setDetailsOffer:
      return extend(state, {
        detailsOffer: action.payload
      });
  }
  return state;
};

export default reducer;
