import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.ACTIVE;

export const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};
