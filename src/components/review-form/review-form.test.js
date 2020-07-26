import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form.jsx';

it(`ReviewForm renders correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
