export const ActionTypes = {
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  GET_NEAR_OFFERS: `GET_NEAR_OFFERS`,
  GET_FAVORITES: `GET_FAVORITES`,
  SET_DETAILS_OFFER_ID: `SET_DETAILS_OFFER_ID`,
  SET_LOADING_FLAG: `SET_LOADING_FLAG`
};

const ActionCreator = {

  getOffers: (offers) => ({
    type: ActionTypes.GET_OFFERS,
    payload: offers
  }),

  getCities: (offers) => ({
    type: ActionTypes.GET_CITIES,
    payload: offers
  }),

  getNearOffers: (offers) => ({
    type: ActionTypes.GET_NEAR_OFFERS,
    payload: offers
  }),

  getFavorites: (offers) => ({
    type: ActionTypes.GET_FAVORITES,
    payload: offers
  }),

  setDetailsOfferId: (offerId) => ({
    type: ActionTypes.SET_DETAILS_OFFER_ID,
    payload: offerId
  }),

  setLoadingFlag: (flag) => ({
    type: ActionTypes.SET_LOADING_FLAG,
    payload: flag
  }),

};

export default ActionCreator;
