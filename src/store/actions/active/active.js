export const Actions = {
  setActiveOffer: `SET_ACTIVE_OFFER`,
  removeActiveOffer: `REMOVE_ACTIVE_OFFER`,
};

const ActionCreator = {

  setActiveOffer: (offer) => ({
    type: Actions.setActiveOffer,
    payload: offer
  }),

  removeActiveOffer: () => ({
    type: Actions.removeActiveOffer
  }),

};

export default ActionCreator;
