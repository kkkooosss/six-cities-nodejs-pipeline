export const Actions = {
  setAuthStatus: `SET_AuthStatus`,
  setUser: `SET_USER`
};

const ActionCreator = {

  setAuthStatus: (status) => ({
    type: Actions.setAuthStatus,
    payload: status
  }),

  setUser: (user) => ({
    type: Actions.setUser,
    payload: user
  })

};

export default ActionCreator;
