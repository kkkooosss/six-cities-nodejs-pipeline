import {extend} from '../../../helpers/utils';
import {ActionTypes} from '../../actions/user/user';
import {AuthStatus} from '../../../helpers/constants';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  user: {},
  loginError: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SET_AUTH_STATUS:
      return extend(state, {
        authStatus: action.payload
      });

    case ActionTypes.SET_USER:
      return extend(state, {
        user: action.payload
      });

    case ActionTypes.SET_LOGIN_ERROR:
      return extend(state, {
        loginError: action.payload
      });
  }

  return state;
};

export default reducer;
