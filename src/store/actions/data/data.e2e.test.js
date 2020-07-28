import ActionCreator, {Actions} from './data.js';
import mockOffers from '../../../mocks/offers.js';

describe(`Data action creator work correctly`, () => {
  it(`Action creator for getOffers Offer returns correct action`, () => {
    expect(ActionCreator.getOffers(mockOffers)).toEqual({
      type: Actions.getOffers,
      payload: mockOffers,
    });
  });

  it(`Action creator for getCities returns correct action`, () => {
    expect(ActionCreator.getCities(mockOffers)).toEqual({
      type: Actions.getCities,
      payload: mockOffers
    });
  });

  it(`Action creator for getNearOffer returns correct action`, () => {
    expect(ActionCreator.getNearOffers(mockOffers)).toEqual({
      type: Actions.getNearOffers,
      payload: mockOffers
    });
  });

  it(`Action creator for getFavorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(mockOffers)).toEqual({
      type: Actions.getFavorites,
      payload: mockOffers
    });
  });

  it(`Action creator for setDetailsOfferId returns correct action`, () => {
    expect(ActionCreator.setDetailsOfferId(1)).toEqual({
      type: Actions.setDetailsOfferId,
      payload: 1
    });
  });

  it(`Action creator for setLoadingFlag returns correct action`, () => {
    expect(ActionCreator.setLoadingFlag(false)).toEqual({
      type: Actions.setLoadingFlag,
      payload: false
    });
  });

});
