import {extend} from '../../../helpers/utils';

import {ActionTypes} from '../../actions/filter/filter';

const initialState = {
  selectedCity: `Amsterdam`,
  selectedFilter: `Popular`,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SELECT_CITY:
      return extend(state, {
        selectedCity: action.payload
      });

    case ActionTypes.SELECT_FILTER:
      return extend(state, {
        selectedFilter: action.payload
      });

  }
  return state;
};

export default reducer;
