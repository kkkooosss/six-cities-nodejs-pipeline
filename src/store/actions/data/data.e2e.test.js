import ActionCreator, {ActionTypes} from './data';
import mockOffers from '../../../test-data/offers';

describe(`Data action creator work correctly`, () => {
  it(`Action creator for getOffers Offer returns correct action`, () => {
    expect(ActionCreator.getOffers(mockOffers)).toEqual({
      type: ActionTypes.GET_OFFERS,
      payload: mockOffers,
    });
  });

  it(`Action creator for getCities returns correct action`, () => {
    expect(ActionCreator.getCities(mockOffers)).toEqual({
      type: ActionTypes.GET_CITIES,
      payload: mockOffers
    });
  });

  it(`Action creator for getNearOffer returns correct action`, () => {
    expect(ActionCreator.getNearOffers(mockOffers)).toEqual({
      type: ActionTypes.GET_NEAR_OFFERS,
      payload: mockOffers
    });
  });

  it(`Action creator for getFavorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(mockOffers)).toEqual({
      type: ActionTypes.GET_FAVORITES,
      payload: mockOffers
    });
  });

  it(`Action creator for setDetailsOfferId returns correct action`, () => {
    expect(ActionCreator.setDetailsOfferId(1)).toEqual({
      type: ActionTypes.SET_DETAILS_OFFER_ID,
      payload: 1
    });
  });

  it(`Action creator for setLoadingFlag returns correct action`, () => {
    expect(ActionCreator.setLoadingFlag(false)).toEqual({
      type: ActionTypes.SET_LOADING_FLAG,
      payload: false
    });
  });

});
