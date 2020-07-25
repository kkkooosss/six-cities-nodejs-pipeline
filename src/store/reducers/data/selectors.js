import NameSpace from '../../name-space.js';
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const stateMock = (state) => state;

export const getOfferById = (id) => createSelector(
    getOffers,
    stateMock,
    (offers) => {
      return offers.find((offer) => offer.id === Number(id));
    }
);

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};
