import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {Favorites} from './favorites';
import {AuthStatus} from '../../helpers/constants';
import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';
import Offer from '../../interfaces/offer';

const FAVORITES: Offer[] = mockOffers;
const AUTH_STATUS: string = AuthStatus.NO_AUTH;

it(`Favorites renders correctly`, () => {
  const tree = renderer
    .create(

        <Provider store={mockStore}>
          <BrowserRouter>
            <Favorites
              favorites={FAVORITES}
              authStatus={AUTH_STATUS}
              onSetFavoriteStatus={jest.fn()}
              onRequestFavorites={jest.fn()}
              onCardHover={jest.fn()}
              onCardHoverLeave={jest.fn()}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)

        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
