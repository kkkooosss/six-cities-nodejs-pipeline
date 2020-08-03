import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {OfferDetails} from './offer-details';
import {BrowserRouter} from 'react-router-dom';

import mockStore from '../../test-data/mock-store';
import mockOffers from '../../test-data/offers';

const mockReviews = [
  {
    id: 1,
    name: `Max`,
    isPro: false,
    userPic: `img/avatar-max.jpg`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  },
  {
    id: 2,
    name: `Angelina`,
    userPic: `img/avatar-angelina.jpg`,
    isPro: false,
    rating: 5,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `2019-05-14`
  }
];

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}>
      <BrowserRouter>
        <OfferDetails
          offer={mockOffers[0]}
          offers={mockOffers}
          nearOffers={mockOffers}
          reviews={mockReviews}
          authStatus={`AUTH`}
          onRequestReviews={() => mockReviews}
          onRequestNearOffers={() => mockOffers}
          onSetFavoriteStatus={() => {}}
          onSetDetailsOfferId={() => 1}
        />
      </BrowserRouter>
    </Provider>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
