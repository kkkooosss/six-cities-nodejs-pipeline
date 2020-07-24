import {extend} from '../../../helpers/utils.js';
import {Actions} from '../../actions/data/data.js';

const initialState = {
  offers: [],
  cities: [],
  nearOffers: [],
  favourites: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case Actions.getOffers:
      return extend(state, {
        offers: action.payload
      });

    case Actions.getCities:
      return extend(state, {
        cities: [...new Set(action.payload.map((offer) => offer.city.name))].sort()
      });

    case Actions.getNearOffers:
      return extend(state, {
        nearOffers: action.payload
      });

    case Actions.getFavourites:
      return extend(state, {
        favourites: action.payload
      });

  }
  return state;
};

export default reducer;
