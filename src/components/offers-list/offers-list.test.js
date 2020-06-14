import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';

const offersTitles = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`OffersList renders correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offersTitles={offersTitles}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
