import {Actions} from '../../actions/user/user.js';
import {AUTH_STATUS} from '../../../helpers/constants.js';
import reducer from './user.js';
import USER from '../../../test-data/user.js';

describe(`User reducer work correctly`, () => {

  it(`Should change authStatus with given value`, () => {
    const state1 = {
      authStatus: AUTH_STATUS.NO_AUTH
    };
    const action = {
      type: Actions.setAuthStatus,
      payload: AUTH_STATUS.AUTH
    };
    expect(reducer(state1, action)).toMatchObject({
      authStatus: AUTH_STATUS.AUTH
    });
  });

  it(`Should change user with given value`, () => {
    const state2 = {
      user: {}
    };
    const action = {
      type: Actions.setUser,
      payload: USER
    };
    expect(reducer(state2, action)).toMatchObject({
      user: USER
    });
  });

});
