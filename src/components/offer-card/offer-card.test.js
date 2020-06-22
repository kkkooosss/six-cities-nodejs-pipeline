import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const offer = {
  id: 2,
  title: `Canal View Prinsengracht`,
  type: `Apartment`,
  isPremium: false,
  price: 132,
  img: `img/apartment-02.jpg`,
};

it(`OfferCard renders correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={offer}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
