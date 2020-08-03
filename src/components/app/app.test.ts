
import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';
import mockReviews from '../../test-data/reviews';
import App from './app';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <App
            onRequestReviews={() => mockReviews}
            onRequestNearOffers={() => mockOffers}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
