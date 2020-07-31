import {extend} from '../../../helpers/utils.js';
import {Actions} from '../../actions/user/user.js';
import {AUTH_STATUS} from '../../../helpers/constants.js';

const initialState = {
  authStatus: AUTH_STATUS.noAuth,
  user: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setAuthStatus:
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
