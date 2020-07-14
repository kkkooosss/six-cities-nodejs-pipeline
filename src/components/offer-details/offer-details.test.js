import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import OfferDetails from './offer-details.jsx';
import {BrowserRouter} from 'react-router-dom';

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

const REVIEWS = [
  {
    id: 1,
    name: `Max`,
    userPic: `img/avatar-max.jpg`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  },
  {
    id: 2,
    name: `Angelina`,
    userPic: `img/avatar-angelina.jpg`,
    rating: 5,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `2019-05-14`
  }
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
  },
  USER: {
    user: {
      id: 1,
      email: `mail@email.com`,
      avatarUrl: `/static/avatar/8.jpg`,
      isPro: false,
      name: `Angelina`,
    }
  }
}));

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <OfferDetails
          offer={OFFERS[0]}
          reviews={REVIEWS}
        />
      </BrowserRouter>
    </Provider>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
