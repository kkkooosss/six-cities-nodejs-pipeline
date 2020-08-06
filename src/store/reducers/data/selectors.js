import NameSpace from '../../name-space';
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getDetailsOfferId = (state) => {
  return state[NAME_SPACE].detailsOfferId;
};

export const getOfferById = createSelector(
    [getOffers, getDetailsOfferId],
    (offers, offerId) => {
      return offers.find((offer) => offer.id === offerId);
    }
);

export const getLoadingFlag = (state) => {
  return state[NAME_SPACE].loading;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};
