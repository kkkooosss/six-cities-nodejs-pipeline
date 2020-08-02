import {createStore} from 'redux';
import OFFERS from './offers';
import REVIEWS from './reviews';

const store = createStore(() => ({
  DATA: {
    offers: OFFERS,
    cities: [`Amsterdam`, `Berlin`],
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
    user: {
      id: 1,
      email: `mail@email.com`,
      avatarUrl: `/static/avatar/8.jpg`,
      isPro: false,
      name: `Angelina`,
    }
  }
}));

export default store;
