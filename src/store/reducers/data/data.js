import {extend} from '../../../helpers/utils';
import {Actions} from '../../actions/data/data';

const initialState = {
  offers: [],
  cities: [],
  nearOffers: [],
  favorites: [],
  detailsOfferId: null,
  loading: true
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

    case Actions.getFavorites:
      return extend(state, {
        favorites: action.payload
      });

    case Actions.setDetailsOfferId:
      return extend(state, {
        detailsOfferId: action.payload
      });

    case Actions.setLoadingFlag:
      return extend(state, {
        loading: action.payload
      });
  }
  return state;
};

export default reducer;
