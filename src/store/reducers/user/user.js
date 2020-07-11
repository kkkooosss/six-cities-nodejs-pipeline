import {extend} from '../../../helpers/helpers.js';
import {Actions} from '../../actions/user/user.js';

const initialState = {
  authorizationStatus: `NO_AUTH`
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setAuthorizationStatus:
      return extend(state, {
        authorizationStatus: action.payload
      });
  }
  return state;
};

export default reducer;
