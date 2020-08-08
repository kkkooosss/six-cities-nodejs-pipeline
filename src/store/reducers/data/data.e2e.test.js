import {ActionTypes} from '../../actions/data/data';
import reducer from './data';

import mockOffers from '../../../test-data/offers';

describe(`Data reducer work correctly`, () => {

  it(`Should change offers with given value`, () => {
    const state1 = {
      offers: []
    };
    const action = {
      type: ActionTypes.GET_OFFERS,
      payload: mockOffers
    };
    expect(reducer(state1, action)).toMatchObject({
      offers: mockOffers
    });
  });

  it(`Should change nearOffers with given value `, () => {
    const state2 = {
      nearOffers: []
    };
    const action = {
      type: ActionTypes.GET_NEAR_OFFERS,
      payload: mockOffers
    };
    expect(reducer(state2, action)).toMatchObject({
      nearOffers: mockOffers
    });
  });

  it(`Should change favorites with given value `, () => {
    const state3 = {
      favorites: []
    };
    const action = {
      type: ActionTypes.GET_FAVORITES,
      payload: mockOffers
    };
    expect(reducer(state3, action)).toMatchObject({
      favorites: mockOffers
    });
  });

  it(`Should change detailsOfferId with given value `, () => {
    const state4 = {
      detailsOfferId: null
    };
    const action = {
      type: ActionTypes.SET_DETAILS_OFFER_ID,
      payload: 1
    };
    expect(reducer(state4, action)).toMatchObject({
      detailsOfferId: 1
    });
  });


  it(`Should change loading with given flag `, () => {
    const state5 = {
      loading: true
    };
    const action = {
      type: ActionTypes.SET_LOADING_FLAG,
      payload: false
    };
    expect(reducer(state5, action)).toMatchObject({
      loading: false
    });
  });
});
