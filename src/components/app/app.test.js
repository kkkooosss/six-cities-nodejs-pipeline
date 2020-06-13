import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const OFFERS_DATA = {
  offersCount: 312,
  offersTitles: [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      offersCount={OFFERS_DATA.offersCount}
      offersTitles={OFFERS_DATA.offersTitles}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
