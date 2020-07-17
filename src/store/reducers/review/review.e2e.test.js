import {Actions} from '../../actions/review/review.js';
import reducer from './review.js';

describe(`Review reducer works correctly`, () => {

  it(`Should change reviews with given value`, () => {
    const state = {
      reviews: []
    };
    const action = {
      type: Actions.getReviews,
      payload: [{id: 1, text: `text`}, {id: 2, text: `text2`}]
    };
    expect(reducer(state, action)).toMatchObject({
      reviews: [{id: 1, text: `text`}, {id: 2, text: `text2`}]
    });
  });

});
