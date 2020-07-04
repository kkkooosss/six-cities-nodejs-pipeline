import {Actions, reducer} from "./reducer.js";

describe(`Reducer work correctly`, () => {

  it(`Should change selectedCity with given value`, () => {

    const state1 = {
      selectedCity: `Amsterdam`,
      selectedOffers: []
    };

    const action = {
      type: Actions.selectCity,
      payload: `Brusseles`
    };

    expect(reducer(state1, action)).toMatchObject({
      selectedCity: `Brusseles`,
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

});
