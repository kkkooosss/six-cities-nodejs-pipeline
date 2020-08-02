import {extend} from '../../../helpers/utils';
import {Actions} from '../../actions/user/user';
import {AUTH_STATUS} from '../../../helpers/constants';

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
