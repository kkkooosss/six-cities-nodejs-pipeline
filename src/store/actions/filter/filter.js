export const Actions = {
  selectCity: `SELECT_CITY`,
  selectOffers: `SELECT_OFFERS`,
  selectFilter: `SELECT_FILTER`,
};

const ActionCreator = {

  selectCity: (city) => ({
    type: Actions.selectCity,
    payload: city
  }),

  selectOffers: (offers) => ({
    type: Actions.selectOffers,
    payload: offers
  }),

  selectFilter: (filter) => ({
    type: Actions.selectFilter,
    payload: filter
  }),

};

export default ActionCreator;
