import {extend} from '../helpers/helpers.js';

const initialState = {
  city: `Amsterdam`,
  offers: []
};

const Actions = {
  setCity: `SET_CITY`,
  getOffers: `GET_OFFERS`
};

const ActionCreator = {

  setCity: (city) => ({
    type: Actions.setCity,
    payload: city
  }),

  getOffers: (offers, city) => ({
    type: Actions.getOffers,
    payload: offers.filter((offer) => offer.city === city)
  })

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.setCity:
      return extend(state, {
        city: action.payload
      });

    case Actions.getOffers:
      return extend(state, {
        offers: action.payload
      });

  }
  return state;
};

export {Actions, reducer, ActionCreator};
