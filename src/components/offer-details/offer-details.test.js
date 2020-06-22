import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details.jsx';

const OFFER = {
  id: 1,
  title: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`,
  isPremium: true,
  price: 120,
  img: `img/apartment-01.jpg`,
};

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<OfferDetails offer={OFFER}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
