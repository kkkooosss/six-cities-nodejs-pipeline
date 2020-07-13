export const Actions = {
  setAuthorizationStatus: `SET_AUTHORIZATION_STATUS`,
  setUser: `SET_USER`
};

const ActionCreator = {

  setAuthorizationStatus: (status) => ({
    type: Actions.setAuthorizationStatus,
    payload: status
  }),

  setUser: (user) => ({
    type: Actions.setUser,
    payload: user
  })

};

export default ActionCreator;
