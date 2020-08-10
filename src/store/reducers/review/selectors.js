import NameSpace from '../../name-space';
import {normalizeReviews} from '../../../helpers/utils';

const NAME_SPACE = NameSpace.REVIEWS;

export const getReviews = (state) => {
  return normalizeReviews(state[NAME_SPACE].reviews);
};

export const getSendingFlag = (state) => {
  return state[NAME_SPACE].sending;
};

export const getErrorFlag = (state) => {
  return state[NAME_SPACE].error;
};
