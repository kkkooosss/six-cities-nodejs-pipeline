import {ActionTypes} from '../../actions/filter/filter';
import {extend} from '../../../helpers/utils';
import {Filters} from '../../../helpers/constants';

const initialState = {
  selectedCity: null,
  selectedFilter: Filters.POPULAR,
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
