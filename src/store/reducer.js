import {extend} from '../helpers/helpers.js';
import {filterOffers} from '../selectors/selectors.js';

const initialState = {
  selectedCity: `Amsterdam`,
  selectedOffers: []
};

const Actions = {
  selectCity: `SELECT_CITY`,
  selectOffers: `SELECT_OFFERS`
};

const ActionCreator = {

  selectCity: (city) => ({
    type: Actions.selectCity,
    payload: city
  }),

  selectOffers: (offers, city) => ({
    type: Actions.selectOffers,
    payload: filterOffers(offers, city)
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

  }
  return state;
};

export {Actions, ActionCreator, reducer};