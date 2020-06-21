import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details.jsx';

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<OfferDetails
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
