import {Actions} from '../../actions/filter/filter.js';
import reducer from './filter.js';

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

  it(`Should change selectedFilter with given value`, () => {
    const state4 = {
      selectedFilter: `Popular`
    };
    const action = {
      type: Actions.selectFilter,
      payload: `High to low`
    };
    expect(reducer(state4, action)).toMatchObject({
      selectedFilter: `High to low`
    });
  });

});
