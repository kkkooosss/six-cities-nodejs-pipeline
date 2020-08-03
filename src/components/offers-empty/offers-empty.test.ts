import * as React from 'react';
import renderer from 'react-test-renderer';
import OffersEmpty from './offers-empty';

it(`OffersEmpty renders correctly`, () => {
  const tree = renderer
    .create(<OffersEmpty/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
