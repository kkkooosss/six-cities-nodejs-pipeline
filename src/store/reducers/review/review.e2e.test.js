import {Actions} from '../../actions/review/review.js';
import reducer from './review.js';

describe(`Review reducer works correctly`, () => {

  it(`Should change reviews with given value`, () => {
    const state1 = {
      reviews: []
    };
    const action = {
      type: Actions.getReviews,
      payload: [{id: 1, text: `text`}, {id: 2, text: `text2`}]
    };
    expect(reducer(state1, action)).toMatchObject({
      reviews: [{id: 1, text: `text`}, {id: 2, text: `text2`}]
    });
  });

  it(`Should set sending flag correctly`, () => {
    const state2 = {
      sending: true
    };
    const action = {
      type: Actions.setSendingFlag,
      payload: false
    };
    expect(reducer(state2, action)).toMatchObject({
      sending: false
    });
  });

  it(`Should set error flag correctly`, () => {
    const state3 = {
      error: false
    };
    const action = {
      type: Actions.setErrorFlag,
      payload: true
    };
    expect(reducer(state3, action)).toMatchObject({
      error: true
    });
  });
});
