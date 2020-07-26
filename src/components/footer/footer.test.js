import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './footer.jsx';

it(`Footer renders correctly`, () => {
  const tree = renderer
    .create(
        <Footer />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
