export const Actions = {
  getOffers: `GET_OFFERS`,
  getCities: `GET_CITIES`,
  getNearOffers: `GET_NEAR_OFFERS`,
  getFavorites: `GET_FAVORITES`,
  setDetailsOfferId: `SET_DETAILS_OFFER_ID`
};

const ActionCreator = {

  getOffers: (offers) => ({
    type: Actions.getOffers,
    payload: offers
  }),

  getCities: (offers) => ({
    type: Actions.getCities,
    payload: offers
  }),

  getNearOffers: (offers) => ({
    type: Actions.getNearOffers,
    payload: offers
  }),

  getFavorites: (offers) => ({
    type: Actions.getFavorites,
    payload: offers
  }),

  setDetailsOfferId: (offerId) => ({
    type: Actions.setDetailsOfferId,
    payload: offerId
  }),

};

export default ActionCreator;
