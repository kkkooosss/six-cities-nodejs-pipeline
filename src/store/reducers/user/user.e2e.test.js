import {Actions} from '../../actions/user/user.js';
import {AuthStatus} from '../../../helpers/constants.js';
import reducer from './user.js';

const USER = {
  id: 1,
  email: `mail@email.com`,
  name: `John Doe`,
  avatarUrl: `/img/john_doe.jpg`,
  isPro: true
};

describe(`User reducer work correctly`, () => {

  it(`Should change authStatus with given value`, () => {
    const state1 = {
      authStatus: AuthStatus.NO_AUTH
    };
    const action = {
      type: Actions.setAuthStatus,
      payload: AuthStatus.AUTH
    };
    expect(reducer(state1, action)).toMatchObject({
      authStatus: AuthStatus.AUTH
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
