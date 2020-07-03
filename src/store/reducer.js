import {extend} from '../helpers/helpers.js';
import {filterOffers} from '../selectors/selectors.js';

const initialState = {
  selectedCity: `Amsterdam`,
  selectedOffers: [],
  selectedFilter: `Popular`
};

const Actions = {
  selectCity: `SELECT_CITY`,
  selectOffers: `SELECT_OFFERS`,
  selectFilter: `SELECT_FILTER`
};

const ActionCreator = {

  selectCity: (city) => ({
    type: Actions.selectCity,
    payload: city
  }),

  selectOffers: (offers, city) => ({
    type: Actions.selectOffers,
    payload: filterOffers(offers, city)
  }),

  selectFilter: (filter) => ({
    type: Actions.selectFilter,
    payload: filter
  })

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.selectCity:
      return extend(state, {
        selectedCity: action.payload
      });

    case Actions.selectOffers:
      return extend(state, {
        selectedOffers: action.payload
      });

    case Actions.selectFilter:
      return extend(state, {
        selectedFilter: action.payload
      });

  }
  return state;
};

export {Actions, ActionCreator, reducer};
