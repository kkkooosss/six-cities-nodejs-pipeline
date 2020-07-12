import {Actions} from '../../actions/details/details.js';
import reducer from './details.js';

describe(`Details reducer work correctly`, () => {

  it(`Should change detailsOffer with given value`, () => {
    const state7 = {
      detailsOffer: null
    };
    const action = {
      type: Actions.setDetailsOffer,
      payload: {id: 1, title: `title1`, city: `Amsterdam`}
    };
    expect(reducer(state7, action)).toMatchObject({
      detailsOffer: {id: 1, title: `title1`, city: `Amsterdam`}
    });
  });

});
