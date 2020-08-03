
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {App} from './app';
import Offer from '../../interfaces/offer';
import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';

const AUTH_STATUS = `NO_AUTH`;
const LOADING = false;
const OFFERS: Offer[] = mockOffers;

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <App
            offers={OFFERS}
            loading={LOADING}
            authStatus={AUTH_STATUS}
            onLogin={jest.fn()}
            onSetFavoriteStatus={jest.fn()}
            onCardHover={jest.fn()}
            onCardHoverLeave={jest.fn()}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
