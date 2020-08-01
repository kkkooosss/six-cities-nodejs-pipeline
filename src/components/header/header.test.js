import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import mockStore from '../../test-data/mock-store';

import Header from './header.jsx';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
