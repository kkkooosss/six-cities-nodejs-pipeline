import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import OffersSort from './offers-sort';
import mockStore from '../../test-data/mock-store';

it(`OffersSort renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <OffersSort />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
