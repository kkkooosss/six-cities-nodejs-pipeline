import {Actions, reducer} from "./reducer.js";

describe(`Reducer work correctly`, () => {

  it(`Should change selectedCity with given value`, () => {

    const state1 = {
      selectedCity: `Amsterdam`,
      selectedOffers: []
    };

    const action = {
      type: Actions.selectCity,
      payload: `Brussels`
    };

    expect(reducer(state1, action)).toMatchObject({
      selectedCity: `Brussels`,
      selectedOffers: []
    });
  });


  it(`Should change selectedOffers with new entries`, () => {
    const state2 = {
      selectedCity: `Amsterdam`,
      selectedOffers: []
    };
    const action = {
      type: Actions.selectOffers,
      payload: [{id: 1, title: `title1`, city: `Amsterdam`}, {id: 2, title: `title2`, city: `Amsterdam`}]
    };
    expect(reducer(state2, action)).toMatchObject({
      selectedCity: `Amsterdam`,
      selectedOffers: [{id: 1, title: `title1`, city: `Amsterdam`}, {id: 2, title: `title2`, city: `Amsterdam`}]
    });
  });

  it(`Should change selectedFilter with given value`, () => {
    const state3 = {
      selectedFilter: `Popular`
    };
    const action = {
      type: Actions.selectFilter,
      payload: `High to low`
    };
    expect(reducer(state3, action)).toMatchObject({
      selectedFilter: `High to low`
    });
  });


  it(`Should change selectedOffer with given value`, () => {
    const state4 = {
      selectedOffer: null
    };
    const action = {
      type: Actions.selectFilter,
      payload: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    expect(reducer(state4, action)).toMatchObject({
      selectedFilter: {id: 1, title: `title1`, city: `Amsterdam`}
    });
  });
});
