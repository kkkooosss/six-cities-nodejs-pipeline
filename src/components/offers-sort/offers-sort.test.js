import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import OffersSort from './offers-sort.jsx';

const store = createStore(() => ({
  FILTER: {
    selectedCity: `Amsterdam`,
    selectedFilter: `Popular`
  }
}));

it(`OffersSort renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <OffersSort />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
