import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Main from './main.jsx';

const OFFERS = [{
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
  images: [
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg,`
  ],
  title: `Penthouse, 4-5 rooms + 5 balconies`,
  isFavorite: false,
  isPremium: false,
  rating: 4.4,
  type: `hotel`,
  bedrooms: 2,
  capacity: 8,
  price: 248,
  amenities: [
    `Laptop friendly workspace`,
    `Baby seat`,
    `Breakfast`,
    `Fridge`,
    `Towels`,
    `Washer`,
    `Air conditioning`
  ],
  host: {
    id: 25,
    name: `Angelina`,
    isPro: true,
    userPic: `img/avatar-angelina.jpg`
  },
  description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
  location: {
    latitude: 52.364540000000005,
    longitude: 4.9019759999999994,
    zoom: 16
  },
  id: 1
},
{
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
  images: [
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg,`
  ],
  title: `Penthouse, 4-5 rooms + 5 balconies`,
  isFavorite: false,
  isPremium: false,
  rating: 4.4,
  type: `hotel`,
  bedrooms: 2,
  capacity: 8,
  price: 248,
  amenities: [
    `Laptop friendly workspace`,
    `Baby seat`,
    `Breakfast`,
    `Fridge`,
    `Towels`,
    `Washer`,
    `Air conditioning`
  ],
  host: {
    id: 25,
    name: `Angelina`,
    isPro: true,
    userPic: `img/avatar-angelina.jpg`
  },
  description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
  location: {
    latitude: 52.364540000000005,
    longitude: 4.9019759999999994,
    zoom: 16
  },
  id: 2
},
];

const store = createStore(() => ({
  DATA: {
    offers: OFFERS,
    cities: [`Amsterdam`, `Berlin`]
  },
  FILTER: {
    selectedCity: `Amsterdam`,
    selectedFilter: `Popular`
  },
  DETAILS: {
    detailsOffer: OFFERS[0],
  },
  ACTIVE: {
    activeOffer: OFFERS[0]
  }
}));

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
