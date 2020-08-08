import {createStore} from 'redux';
import mockOffers from './offers';
import mockReviews from './reviews';
import mockUser from './user';

import Offer from '../interfaces/offer';
import Review from '../interfaces/review';
import User from '../interfaces/user';

const OFFERS:Offer[] = mockOffers;
const REVIEWS:Review[] = mockReviews;
const USER:User = mockUser;

const store = createStore(() => ({
  DATA: {
    offers: OFFERS,
    nearOffers: OFFERS,
    loading: false
  },
  FILTER: {
    selectedCity: `Amsterdam`,
    selectedFilter: `Popular`
  },
  DETAILS: {
    detailsOffer: OFFERS[0],
  },
  REVIEWS: {
    reviews: REVIEWS,
    sending: false,
    error: false
  },
  ACTIVE: {
    activeOffer: OFFERS[0]
  },
  USER: {
    authStatus: `AUTH`,
    user: USER
  }
}));

export default store;
