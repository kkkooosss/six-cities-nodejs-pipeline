import ActionCreator from '../../actions/data/data.js';
import {formatOffers} from '../../../helpers/helpers.js';

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then(
          (response) => {
            const formatedData = formatOffers(response.data);
            dispatch(ActionCreator.getOffers(formatedData));
            dispatch(ActionCreator.getCities(formatedData));
          });
  }
};

export default Operation;
