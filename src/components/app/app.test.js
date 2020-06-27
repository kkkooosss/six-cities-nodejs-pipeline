import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const offersCount = 4;

const OFFERS = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isPremium: true,
    price: 120,
    coordinates: [52.3909553943508, 4.85309666406198],
    img: `img/apartment-01.jpg`,
    photos: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    rating: 4.8,
    bedrooms: 3,
    capacity: 4,
    host: {
      id: 1,
      isPro: true,
      name: `Angelina`,
      userPic: `img/avatar-angelina.jpg`
    },
    amenities: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`]
  },
  {
    id: 2,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    isPremium: false,
    price: 132,
    coordinates: [52.369553943508, 4.85309666406198],
    img: `img/apartment-02.jpg`,
    photos: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    rating: 3.8,
    bedrooms: 3,
    capacity: 4,
    host: {
      id: 2,
      isPro: false,
      name: `Max`,
      userPic: `img/avatar-max.jpg`
    },
    amenities: [`Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Kitchen`,
      `Cabel TV`,
      `Fridge`]
  },
  {
    id: 3,
    title: `Wood and stone place`,
    type: `Room`,
    isPremium: false,
    price: 80,
    coordinates: [52.3909553943508, 4.929309666406198],
    img: `img/room.jpg`,
    photos: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    rating: 2.3,
    bedrooms: 1,
    capacity: 2,
    host: {
      id: 3,
      isPro: false,
      name: `Jane`,
      userPic: `img/avatar-angelina.jpg`
    },
    amenities: [`Wi-Fi`,
      `Washing machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Fridge`]
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
    price: 180,
    coordinates: [52.3809553943508, 4.939309666406198],
    img: `img/apartment-03.jpg`,
    photos: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    rating: 3.1,
    bedrooms: 2,
    capacity: 4,
    host: {
      id: 4,
      isPro: true,
      name: `John`,
      userPic: `img/avatar-max.jpg`
    },
    amenities: [`Wi-Fi`,
      `Washing machine`,
      `Heating`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`]
  }
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


it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      offersCount={offersCount}
      offers={OFFERS}
      reviews={REVIEWS}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
