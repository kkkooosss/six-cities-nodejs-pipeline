import ActionCreator from '../../actions/user/user';
import DataActionCreator from '../../actions/data/data';
import {AUTH_STATUS} from '../../../helpers/constants';
import {formatUser} from '../../../helpers/utils';

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
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setUser(formatUser(response.data)));
        dispatch(ActionCreator.setAuthStatus(AUTH_STATUS.auth));
        dispatch(DataActionCreator.setLoadingFlag(false));
      });
  }
};

export default Operation;
