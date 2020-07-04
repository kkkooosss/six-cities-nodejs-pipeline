import {extend} from '../helpers/helpers.js';
import {filterOffers} from '../selectors/selectors.js';

const initialState = {
  selectedCity: `Amsterdam`,
  selectedOffers: [],
  selectedFilter: `Popular`,
  activeOffer: null
};

const Actions = {
  selectCity: `SELECT_CITY`,
  selectOffers: `SELECT_OFFERS`,
  selectFilter: `SELECT_FILTER`,
  setActiveOffer: `SET_ACTIVE_OFFER`,
  removeActiveOffer: `REMOVE_ACTIVE_OFFER`
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
  }),

  setActiveOffer: (offer) => ({
    type: Actions.setActiveOffer,
    payload: offer
  }),

  removeActiveOffer: () => ({
    type: Actions.removeActiveOffer
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

    case Actions.setActiveOffer:
      return extend(state, {
        activeOffer: action.payload
      });

    case Actions.removeActiveOffer:
      return extend(state, {
        activeOffer: null
      });
  }
  return state;
};

export {Actions, ActionCreator, reducer};
