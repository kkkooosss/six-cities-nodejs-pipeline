import NameSpace from '../../name-space';
import {createSelector} from 'reselect';
import {getOffers} from '../data/selectors';

const NAME_SPACE = NameSpace.FILTER;

export const getSelectedCity = (state) => {
  return state[NAME_SPACE].selectedCity;
};

export const getSelectedFilter = (state) => {
  return state[NAME_SPACE].selectedFilter;
};

export const filterOffers = createSelector(
    [getSelectedCity, getOffers],
    (city, offers) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);
