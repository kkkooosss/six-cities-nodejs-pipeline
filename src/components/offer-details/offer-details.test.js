import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import OfferDetails from './offer-details.jsx';
import {BrowserRouter} from 'react-router-dom';

import mockStore from '../../mocks/mock-store.js';
import mockOffers from '../../mocks/offers.js';

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}>
      <BrowserRouter>
        <OfferDetails offer={mockOffers[0]} />
      </BrowserRouter>
    </Provider>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
