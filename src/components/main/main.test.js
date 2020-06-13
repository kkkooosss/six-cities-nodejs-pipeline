import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const OFFERS_DATA = {
  offersCount: 312,
  offersTitles: [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={OFFERS_DATA.offersCount}
      offersTitles={OFFERS_DATA.offersTitles}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
