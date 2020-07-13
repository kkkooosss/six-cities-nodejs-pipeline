import {Actions} from '../../actions/user/user.js';
import {AuthorizationStatus} from '../../reducers/user/user.js';
import reducer from './user.js';

describe(`User reducer work correctly`, () => {

  it(`Should return initial state without additional parameteres`, () => {
    const state1 = {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    };

    expect(reducer(state1, {})).toMatchObject({
      authorizationStatus: AuthorizationStatus.NO_AUTH
    });
  });

  it(`Should change authorizationStatus with given value`, () => {
    const state2 = {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    };
    const action = {
      type: Actions.setAuthorizationStatus,
      payload: AuthorizationStatus.AUTH
    };
    expect(reducer(state2, action)).toMatchObject({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

});
