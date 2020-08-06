import {ActionTypes} from '../../actions/active/active';
import {extend} from '../../../helpers/utils';

const initialState = {
  activeOffer: null
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });

    case ActionTypes.REMOVE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: null
      });
  }
  return state;
};

export default reducer;
