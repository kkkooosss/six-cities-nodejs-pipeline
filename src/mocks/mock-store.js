import {createStore} from 'redux';
import OFFERS from './offers.js';
import REVIEWS from './reviews.js';

const store = createStore(() => ({
  DATA: {
    offers: OFFERS,
    cities: [`Amsterdam`, `Berlin`],
    nearOffers: OFFERS
  },
  FILTER: {
    selectedCity: `Amsterdam`,
    selectedFilter: `Popular`
  },
  DETAILS: {
    detailsOffer: OFFERS[0],
  },
  REVIEWS: {
    reviews: REVIEWS
  },
  ACTIVE: {
    activeOffer: OFFERS[0]
  },
  USER: {
    authorizationStatus: `AUTH`,
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
