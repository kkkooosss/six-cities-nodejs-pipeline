import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.FILTER;

export const getSelectedOffers = (state) => {
  return state[NAME_SPACE].selectedOffers;
};

export const getSelectedCity = (state) => {
  return state[NAME_SPACE].selectedCity;
};

export const getSelectedFilter = (state) => {
  return state[NAME_SPACE].selectedFilter;
};
