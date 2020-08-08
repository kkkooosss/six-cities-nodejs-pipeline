import DataActionCreator from '../../actions/data/data';
import FilterActionCreator from '../../actions/filter/filter';
import {formatOffers, getCitiesList} from '../../../helpers/utils';
import {RequestCodes} from '../../../helpers/constants';

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/hotels`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getOffers(formatOffers(response.data)));
            dispatch(FilterActionCreator.selectCity(getCitiesList(response.data)[0]));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  },

  loadNearOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getNearOffers(formatOffers(response.data)));
          });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getFavorites(formatOffers(response.data)));
          });
  },

  setFavoriteStatus: (offerId, isFavorite) => (dispatch, getState, api) => {
    let request = isFavorite ? RequestCodes.REMOVE : RequestCodes.ADD;
    return api.post(`/favorite/${offerId}/${request}`, {})
      .then(() => {
        dispatch(Operation.loadFavorites());
        dispatch(Operation.loadOffers());
      });
  }
};

export default Operation;
