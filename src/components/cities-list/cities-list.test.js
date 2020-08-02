import * as React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

const CITIES = [
  `Amsterdam`,
  `Brusseles`,
  `Berlin`,
  `Cologne`
];

const selectedCity = `Amsterdam`;

it(`CitiesList renders correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={CITIES}
      selectedCity={selectedCity}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
