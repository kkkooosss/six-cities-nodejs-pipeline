import {extend} from '../../../helpers/helpers.js';
import {Actions} from '../../actions/data/data.js';

const initialState = {
  offers: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.getOffers:
      return extend(state, {
        offers: action.payload
      });

  }
  return state;
};

export default reducer;
