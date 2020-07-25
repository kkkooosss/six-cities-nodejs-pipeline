import {Actions} from '../../actions/user/user.js';
import {AuthStatus} from '../../../helpers/constants.js';
import reducer from './user.js';

describe(`User reducer work correctly`, () => {

  it(`Should return initial state without additional parameteres`, () => {
    const state1 = {
      authStatus: AuthStatus.NO_AUTH
    };

    expect(reducer(state1, {})).toMatchObject({
      authStatus: AuthStatus.NO_AUTH
    });
  });

  it(`Should change authorizationStatus with given value`, () => {
    const state2 = {
      authStatus: AuthStatus.NO_AUTH
    };
    const action = {
      type: Actions.setAuthorizationStatus,
      payload: AuthStatus.AUTH
    };
    expect(reducer(state2, action)).toMatchObject({
      authStatus: AuthStatus.AUTH
    });
  });

});
