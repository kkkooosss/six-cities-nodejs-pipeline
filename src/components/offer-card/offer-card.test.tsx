import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Offer from '../../interfaces/offer';
import mockOffers from '../../test-data/offers';

import OfferCard from './offer-card';

const OFFER: Offer = mockOffers[0];

it(`OfferCard renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferCard
            offer={OFFER}
            onCardHover={jest.fn()}
            onCardHoverLeave={jest.fn()}
            onSetFavoriteStatus={jest.fn()}
            cardType={`cities`}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
