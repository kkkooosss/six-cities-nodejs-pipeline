import ActionCreator, {Actions} from './active.js';
import OFFERS from '../../../test-data/offers';

const OFFER = OFFERS[0];

describe(`Active action creator work correctly`, () => {
  it(`Action creator for set active Offer returns correct action`, () => {
    expect(ActionCreator.setActiveOffer(OFFER)).toEqual({
      type: Actions.setActiveOffer,
      payload: OFFER,
    });
  });

  it(`Action creator for remove active Offer returns correct action`, () => {
    expect(ActionCreator.removeActiveOffer()).toEqual({
      type: Actions.removeActiveOffer
    });
  });
});
