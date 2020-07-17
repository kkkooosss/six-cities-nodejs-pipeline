import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.REVIEWS;

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};
