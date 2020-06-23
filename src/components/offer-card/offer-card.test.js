import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const OFFER = {
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
};

it(`OfferCard renders correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={OFFER}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
