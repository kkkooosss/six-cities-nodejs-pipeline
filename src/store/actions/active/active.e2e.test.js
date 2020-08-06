import ActionCreator, {ActionTypes} from './active';
import OFFERS from '../../../test-data/offers';

const OFFER = OFFERS[0];

describe(`Active action creator work correctly`, () => {
  it(`Action creator for set active Offer returns correct action`, () => {
    expect(ActionCreator.setActiveOffer(OFFER)).toEqual({
      type: ActionTypes.SET_ACTIVE_OFFER,
      payload: OFFER,
    });
  });

  it(`Action creator for remove active Offer returns correct action`, () => {
    expect(ActionCreator.removeActiveOffer()).toEqual({
      type: ActionTypes.REMOVE_ACTIVE_OFFER
    });
  });
});
