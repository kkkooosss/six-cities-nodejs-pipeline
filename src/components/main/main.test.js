import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const offersCount = 4;

const OFFERS = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    isPremium: true,
    price: 120,
    img: `img/apartment-01.jpg`,
  },
  {
    id: 2,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    isPremium: false,
    price: 132,
    img: `img/apartment-02.jpg`,
  },
  {
    id: 3,
    title: `Wood and stone place`,
    type: `Room`,
    isPremium: false,
    price: 80,
    img: `img/room.jpg`,
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
    price: 180,
    img: `img/apartment-03.jpg`,
  }
];

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={offersCount}
      offers={OFFERS}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
