import {Actions} from '../../actions/data/data.js';
import reducer from './data.js';

import mockOffers from '../../../mocks/offers';

describe(`Data reducer work correctly`, () => {

  it(`Should change offers with given value`, () => {
    const state1 = {
      offers: []
    };
    const action = {
      type: Actions.getOffers,
      payload: mockOffers
    };
    expect(reducer(state1, action)).toMatchObject({
      offers: mockOffers
    });
  });

  it(`Should change cities with given value `, () => {
    const state2 = {
      cities: []
    };
    const action = {
      type: Actions.getCities,
      payload: [{id: 1, city: {name: `Amsterdam`}}, {id: 2, city: {name: `Dusseldorf`}}]
    };
    expect(reducer(state2, action)).toMatchObject({
      cities: [`Amsterdam`, `Dusseldorf`]
    });
  });

  it(`Should change nearOffers with given value `, () => {
    const state3 = {
      nearOffers: []
    };
    const action = {
      type: Actions.getNearOffers,
      payload: mockOffers
    };
    expect(reducer(state3, action)).toMatchObject({
      nearOffers: mockOffers
    });
  });

  it(`Should change favorites with given value `, () => {
    const state4 = {
      favorites: []
    };
    const action = {
      type: Actions.getFavorites,
      payload: mockOffers
    };
    expect(reducer(state4, action)).toMatchObject({
      favorites: mockOffers
    });
  });

  it(`Should change detailsOfferId with given value `, () => {
    const state5 = {
      detailsOfferId: null
    };
    const action = {
      type: Actions.setDetailsOfferId,
      payload: 1
    };
    expect(reducer(state5, action)).toMatchObject({
      detailsOfferId: 1
    });
  });


  it(`Should change loading with given flag `, () => {
    const state6 = {
      loading: true
    };
    const action = {
      type: Actions.setLoadingFlag,
      payload: false
    };
    expect(reducer(state6, action)).toMatchObject({
      loading: false
    });
  });
});
