export const ActionTypes = {
  SELECT_CITY: `SELECT_CITY`,
  SELECT_FILTER: `SELECT_FILTER`,
};

const ActionCreator = {

  selectCity: (city) => ({
    type: ActionTypes.SELECT_CITY,
    payload: city
  }),

  selectFilter: (filter) => ({
    type: ActionTypes.SELECT_FILTER,
    payload: filter
  }),

};

export default ActionCreator;
