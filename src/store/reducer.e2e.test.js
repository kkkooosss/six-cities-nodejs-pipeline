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

  it(`Should not assign offers from another city`, () => {
    const state2 = {
      selectedCity: `Amsterdam`,
      selectedOffers: []
    };
    const action = {
      type: Actions.selectOffers,
      payload: [{id: 1, title: `title1`, city: `Amsterdam`}, {id: 2, title: `title2`, city: `Amsterdam`}, {id: 3, title: `title2`, city: `Bruseles`}]
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


  it(`Should change activeOffer with given value`, () => {
    const state4 = {
      activeOffer: null
    };
    const action = {
      type: Actions.setActiveOffer,
      payload: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    expect(reducer(state4, action)).toMatchObject({
      activeOffer: {id: 1, title: `title1`, city: `Amsterdam`}
    });
  });

  it(`Should remove activeOffer `, () => {
    const state5 = {
      activeOffer: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    const action = {
      type: Actions.removeActiveOffer
    };
    expect(reducer(state5, action)).toMatchObject({
      activeOffer: null
    });
  });

  it(`Should change detailsOffer with given value`, () => {
    const state6 = {
      detailsOffer: null
    };
    const action = {
      type: Actions.setDetailsOffer,
      payload: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    expect(reducer(state6, action)).toMatchObject({
      detailsOffer: {id: 1, title: `title1`, city: `Amsterdam`}
    });
  });
});
