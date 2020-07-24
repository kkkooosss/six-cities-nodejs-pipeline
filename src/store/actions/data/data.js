export const Actions = {
  getOffers: `GET_OFFERS`,
  getCities: `GET_CITIES`,
  getNearOffers: `GET_NEAR_OFFERS`,
  getFavourites: `GET_FAVOURITES`,
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

  getFavourites: (offers) => ({
    type: Actions.getFavourites,
    payload: offers
  }),

};

export default ActionCreator;
