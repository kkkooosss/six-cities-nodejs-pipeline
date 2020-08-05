import ActionCreator from '../../actions/user/user';
import DataActionCreator from '../../actions/data/data';
import {AuthStatus} from '../../../helpers/constants';
import {formatUser} from '../../../helpers/utils';

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUser(formatUser(response.data)));
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
      })
      .catch((err) => {
        if (err.response.status !== 401) {
          throw err;
        }
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
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
        dispatch(DataActionCreator.setLoadingFlag(false));
      });
  }
};

export default Operation;
