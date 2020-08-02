import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Main from './main';
import {BrowserRouter} from 'react-router-dom';
import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';


it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Main offers={mockOffers} />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
