import {extend} from '../helpers/helpers.js';

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

  getOffers: (offers, city) => ({
    type: Actions.selectOffers,
    payload: offers.filter((offer) => offer.city === city)
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
