import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const OFFER_TITLE = `Beautiful &amp; luxurious apartment at great location`;

it(`OfferCard renders correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offerTitle={OFFER_TITLE}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
