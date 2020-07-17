import ActionCreator from '../../actions/user/user.js';
import {AuthorizationStatus} from '../../reducers/user/user.js';
import {formatUser} from '../../../helpers/helpers.js';

const Operation = {
  checkAuthorizationStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
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
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      });
  }
};

export default Operation;
