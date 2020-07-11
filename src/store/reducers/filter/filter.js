import {extend} from '../../../helpers/helpers.js';
import {filterOffers} from './selectors.js';

import {Actions} from '../../actions/filter/filter.js';

const initialState = {
  selectedCity: `Amsterdam`,
  selectedFilter: `Popular`,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.selectCity:
      return extend(state, {
        selectedCity: action.payload
      });

    case Actions.selectFilter:
      return extend(state, {
        selectedFilter: action.payload
      });

  }
  return state;
};

export default reducer;
