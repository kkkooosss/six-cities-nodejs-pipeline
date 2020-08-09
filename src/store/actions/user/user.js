export const ActionTypes = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_USER: `SET_USER`,
  SET_LOGIN_ERROR: `SET_LOGIN_ERROR`
};

const ActionCreator = {

  setAuthStatus: (status) => ({
    type: ActionTypes.SET_AUTH_STATUS,
    payload: status
  }),

  setUser: (user) => ({
    type: ActionTypes.SET_USER,
    payload: user
  }),

  setLoginError: (flag) => ({
    type: ActionTypes.SET_LOGIN_ERROR,
    payload: flag
  })

};

export default ActionCreator;
