import ActionCreator from '../../actions/data/data';
import {formatOffers} from '../../../helpers/utils';
import {REQUEST_CODES} from '../../../helpers/constants';

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingFlag(true));
    return api.get(`/hotels`)
      .then(
          (response) => {
            dispatch(ActionCreator.getOffers(formatOffers(response.data)));
            dispatch(ActionCreator.getCities(response.data));
            dispatch(ActionCreator.setLoadingFlag(false));
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
            dispatch(ActionCreator.getFavorites(formatOffers(response.data)));
          });
  },

  setFavoriteStatus: (offerId, isFavorite) => (dispatch, getState, api) => {
    let request = isFavorite ? REQUEST_CODES.remove : REQUEST_CODES.add;
    return api.post(`/favorite/${offerId}/${request}`, {})
      .then(() => {
        dispatch(Operation.loadFavorites());
        dispatch(Operation.loadOffers());
      });
  }
};

export default Operation;
