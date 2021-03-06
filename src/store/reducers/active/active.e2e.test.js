import {ActionTypes} from '../../actions/active/active';
import reducer from './active';

describe(`Active reducer work correctly`, () => {

  it(`Should change activeOffer with given value`, () => {
    const state1 = {
      activeOffer: null
    };
    const action = {
      type: ActionTypes.SET_ACTIVE_OFFER,
      payload: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    expect(reducer(state1, action)).toMatchObject({
      activeOffer: {id: 1, title: `title1`, city: `Amsterdam`}
    });
  });

  it(`Should remove activeOffer `, () => {
    const state2 = {
      activeOffer: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    const action = {
      type: ActionTypes.REMOVE_ACTIVE_OFFER
    };
    expect(reducer(state2, action)).toMatchObject({
      activeOffer: null
    });
  });

});
