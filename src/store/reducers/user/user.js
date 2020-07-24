import {extend} from '../../../helpers/utils.js';
import {Actions} from '../../actions/user/user.js';
import {AuthStatus} from '../../../helpers/constants.js';

const initialState = {
  authStatus: AuthStatus.noAuth,
  user: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setAuthorizationStatus:
      return extend(state, {
        authStatus: action.payload
      });

    case Actions.setUser:
      return extend(state, {
        user: action.payload
      });
  }

  return state;
};

export default reducer;
