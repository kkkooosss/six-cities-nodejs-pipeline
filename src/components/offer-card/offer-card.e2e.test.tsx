import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';
import Offer from '../../interfaces/offer';
import mockOffers from '../../test-data/offers';

const OFFER: Offer = mockOffers[0];

configure({adapter: new Adapter()});

describe(`e2e in OfferCard`, () => {

  it(`hover on the card works correctly`, () => {
    const hoverHandler = jest.fn();

    const tree = shallow(<OfferCard
      offer={OFFER}
      onCardHover={hoverHandler}
      onCardHoverLeave={jest.fn()}
      onSetFavoriteStatus={jest.fn()}
      cardType={`cities`}
    />);

    tree.simulate(`mouseover`);

    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });
});
