export const Actions = {
  getOffers: `GET_OFFERS`,
  getCities: `GET_CITIES`
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

};

export default ActionCreator;
