import {ActionTypes} from '../../actions/filter/filter';
import reducer from './filter';

describe(`Reducer work correctly`, () => {

  it(`Should change selectedCity with given value`, () => {

    const state1 = {
      selectedCity: `Amsterdam`,
      selectedOffers: []
    };

    const action = {
      type: ActionTypes.SELECT_CITY,
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
      type: ActionTypes.SELECT_FILTER,
      payload: `High to low`
    };
    expect(reducer(state4, action)).toMatchObject({
      selectedFilter: `High to low`
    });
  });

});
