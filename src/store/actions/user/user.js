export const Actions = {
  setAuthorizationStatus: `SET_AUTHORIZATION_STATUS`
};

const ActionCreator = {

  setAuthorizationStatus: (status) => ({
    type: Actions.setAuthorizationStatus,
    payload: status
  })

};

export default ActionCreator;
