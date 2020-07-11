import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};
