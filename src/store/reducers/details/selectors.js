import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.DETAILS;

export const getDetailsOffer = (state) => {
  return state[NAME_SPACE].detailsOffer;
};
