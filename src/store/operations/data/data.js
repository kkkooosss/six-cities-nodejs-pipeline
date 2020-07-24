import ActionCreator from '../../actions/data/data.js';
import {formatOffers} from '../../../helpers/utils.js';
import {REQUEST_CODES as requestCodes} from '../../../helpers/constants.js';

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then(
          (response) => {
            dispatch(ActionCreator.getOffers(formatOffers(response.data)));
            dispatch(ActionCreator.getCities(response.data));
          });
  },

  loadNearOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then(
          (response) => {
            dispatch(ActionCreator.getNearOffers(formatOffers(response.data)));
          });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(
          (response) => {
            dispatch(ActionCreator.getFavourites(formatOffers(response.data)));
          });
  },

  setFavoriteStatus: (offerId, isFavorite) => (dispatch, getState, api) => {
    let request = isFavorite ? requestCodes.remove : requestCodes.add;
    return api.post(`/favorite/${offerId}/${request}`, {})
      .then(() => {
        dispatch(Operation.loadFavorites());
        dispatch(Operation.loadOffers());
      });
  }
};

export default Operation;
