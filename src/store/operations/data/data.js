import ActionCreator from '../../actions/data/data.js';
import {formatOffers} from '../../../helpers/utils.js';

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
};

export default Operation;
