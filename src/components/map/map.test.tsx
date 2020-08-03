import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';
import Map from './map';
import Offer from '../../interfaces/offer';

const OFFERS: Offer[] = mockOffers;

it(`Map renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Map
            offers={OFFERS}
            isPropertyMap={false}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
