import {extend, formatOffers} from '../helpers/helpers.js';
import {filterOffers} from '../selectors/selectors.js';

const initialState = {
  offers: [],
  selectedCity: `Amsterdam`,
  selectedOffers: [],
  selectedFilter: `Popular`,
  activeOffer: null,
  detailsOffer: null
};

const Actions = {
  getOffers: `GET_OFFERS`,
  selectCity: `SELECT_CITY`,
  selectOffers: `SELECT_OFFERS`,
  selectFilter: `SELECT_FILTER`,
  setActiveOffer: `SET_ACTIVE_OFFER`,
  removeActiveOffer: `REMOVE_ACTIVE_OFFER`,
  setDetailsOffer: `SET_DETAILS_OFFER`
};

const ActionCreator = {

  getOffers: (offers) => ({
    type: Actions.getOffers,
    payload: offers
  }),

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

  setActiveOffer: (offer) => ({
    type: Actions.setActiveOffer,
    payload: offer
  }),

  removeActiveOffer: () => ({
    type: Actions.removeActiveOffer
  }),

  setDetailsOffer: (offer) => ({
    type: Actions.setDetailsOffer,
    payload: offer
  })

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.getOffers:
      return extend(state, {
        offers: action.payload
      });

    case Actions.selectCity:
      return extend(state, {
        selectedCity: action.payload
      });

    case Actions.selectOffers:
      return extend(state, {
        selectedOffers: filterOffers(action.payload, state.selectedCity)
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

    case Actions.setDetailsOffer:
      return extend(state, {
        detailsOffer: action.payload
      });
  }
  return state;
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then(
          (response) => {
            dispatch(ActionCreator.getOffers(formatOffers(response.data)));
          });
  }
};

export {Actions, ActionCreator, reducer, Operation};
