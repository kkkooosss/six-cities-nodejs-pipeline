import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';
import Map from './map';


it(`Map renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Map
            offers={mockOffers}
            isPropertyMap={false}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
