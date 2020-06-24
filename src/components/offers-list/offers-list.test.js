import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';

const OFFERS = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    isPremium: true,
    price: 120,
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

it(`OffersList renders correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offers={OFFERS}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
