import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CitiesList from './cities-list';

const CITIES: string[] = [
  `Amsterdam`,
  `Brusseles`,
  `Berlin`,
  `Cologne`
];

const SELECTED_CITY = `Amsterdam`;

it(`CitiesList renders correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={CITIES}
      selectedCity={SELECTED_CITY}
      onCitySelect={jest.fn}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
