export const Actions = {
  setDetailsOffer: `SET_DETAILS_OFFER`
};

const ActionCreator = {

  setDetailsOffer: (offer) => ({
    type: Actions.setDetailsOffer,
    payload: offer
  })

};

export default ActionCreator;
