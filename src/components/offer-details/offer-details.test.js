import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details.jsx';

const OFFER = {
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
};

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<OfferDetails offer={OFFER}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
