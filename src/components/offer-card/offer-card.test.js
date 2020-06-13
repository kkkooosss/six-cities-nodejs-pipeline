import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const offerTitle = `Beautiful &amp; luxurious apartment at great location`;

it(`OfferCard renders correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offerTitle={offerTitle}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
