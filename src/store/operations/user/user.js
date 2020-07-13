import ActionCreator from '../../actions/user/user.js';
import {AuthorizationStatus} from '../../reducers/user/user.js';

const Operation = {
  checkAuthorizationStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
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
      .then(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      });
  }
};

export default Operation;
