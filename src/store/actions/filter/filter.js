export const Actions = {
  selectCity: `SELECT_CITY`,
  selectFilter: `SELECT_FILTER`,
};

const ActionCreator = {

  selectCity: (city) => ({
    type: Actions.selectCity,
    payload: city
  }),

  selectFilter: (filter) => ({
    type: Actions.selectFilter,
    payload: filter
  }),

};

export default ActionCreator;
