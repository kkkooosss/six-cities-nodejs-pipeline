import {ActionTypes} from '../../actions/user/user';
import {AuthStatus} from '../../../helpers/constants';
import reducer from './user';
import USER from '../../../test-data/user';

describe(`User reducer work correctly`, () => {

  it(`Should change authStatus with given value`, () => {
    const state1 = {
      authStatus: AuthStatus.NO_AUTH
    };
    const action = {
      type: ActionTypes.SET_AUTH_STATUS,
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
      type: ActionTypes.SET_USER,
      payload: USER
    };
    expect(reducer(state2, action)).toMatchObject({
      user: USER
    });
  });

  it(`Should change loginError with given value`, () => {
    const state3 = {
      loginError: false
    };
    const action = {
      type: ActionTypes.SET_LOGIN_ERROR,
      payload: true
    };
    expect(reducer(state3, action)).toMatchObject({
      loginError: true
    });
  });

});
