import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {OfferDetails} from './offer-details';
import {BrowserRouter} from 'react-router-dom';

import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';
import Review from '../../interfaces/review';
import Offer from '../../interfaces/offer';
import mockReviews from '../../test-data/reviews';

const OFFER_ID = `1`;
const SELECTED_CITY = `Amsterdam`;
const AuthStatus = `NO_AUTH`;
const OFFER: Offer = mockOffers[0];
const NEAR_OFFERS: Offer[] = mockOffers;
const SELECTED_OFFERS: Offer[] = mockOffers;
const REVIEWS: Review[] = mockReviews;

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}>
      <BrowserRouter>
        <OfferDetails
          offerId={OFFER_ID}
          selectedCity={SELECTED_CITY}
          authStatus={AuthStatus}
          offer={OFFER}
          nearOffers={NEAR_OFFERS}
          selectedOffers={SELECTED_OFFERS}
          reviews={REVIEWS}
          onRequestReviews={jest.fn()}
          onRequestNearOffers={jest.fn()}
          onSetDetailsOfferId={jest.fn()}
          onSetFavoriteStatus={jest.fn()}
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
