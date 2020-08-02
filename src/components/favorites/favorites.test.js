import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {Favorites} from './favorites.jsx';
import mockStore from '../../test-data/mock-store.js';
import offersMock from '../../test-data/offers.js';

it(`Favorites renders correctly`, () => {
  const tree = renderer
    .create(

        <Provider store={mockStore}>
          <BrowserRouter>
            <Favorites
              favorites={offersMock}
              onRequestFavorites={() => offersMock} />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)

        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
