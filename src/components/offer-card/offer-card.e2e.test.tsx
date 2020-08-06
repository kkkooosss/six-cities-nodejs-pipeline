import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';
import Offer from '../../interfaces/offer';
import mockOffers from '../../test-data/offers';
import {CardTypes} from '../../helpers/constants';

const OFFER: Offer = mockOffers[0];
const CARD_TYPE: string = CardTypes.CITIES;

configure({adapter: new Adapter()});

describe(`e2e in OfferCard`, () => {

  it(`hover on the card works correctly`, () => {
    const hoverHandler = jest.fn();

    const tree = shallow(<OfferCard
      offer={OFFER}
      isAuthorized={false}
      onCardHover={hoverHandler}
      onCardHoverLeave={jest.fn()}
      onSetFavoriteStatus={jest.fn()}
      cardType={CARD_TYPE}
    />);

    tree.simulate(`mouseover`);

    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });
});
