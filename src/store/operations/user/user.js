import ActionCreator from '../../actions/user/user.js';
import {AUTH_STATUS} from '../../../helpers/constants.js';
import {formatUser} from '../../../helpers/utils.js';

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuthStatus(AUTH_STATUS.noAuth));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setUser(formatUser(response.data)));
        dispatch(ActionCreator.setAuthStatus(AUTH_STATUS.auth));
      });
  }
};

export default Operation;
