export const ActionTypes = {
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  REMOVE_ACTIVE_OFFER: `REMOVE_ACTIVE_OFFER`,
};

const ActionCreator = {

  setActiveOffer: (offer) => ({
    type: ActionTypes.SET_ACTIVE_OFFER,
    payload: offer
  }),

  removeActiveOffer: () => ({
    type: ActionTypes.REMOVE_ACTIVE_OFFER
  }),

};

export default ActionCreator;
