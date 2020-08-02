import {Actions} from '../../actions/active/active';
import {extend} from '../../../helpers/utils';

const initialState = {
  activeOffer: null
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setActiveOffer:
      return extend(state, {
        activeOffer: action.payload
      });

    case Actions.removeActiveOffer:
      return extend(state, {
        activeOffer: null
      });
  }
  return state;
};

export default reducer;
