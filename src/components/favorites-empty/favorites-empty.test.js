import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import mockStore from '../../mocks/mock-store';

import FavoritesEmpty from './favorites-empty.jsx';

it(`FavoritesEmpty renders correctly`, () => {
  const tree = renderer
    .create(

        <Provider store={mockStore}>
          <BrowserRouter>
            <FavoritesEmpty />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
