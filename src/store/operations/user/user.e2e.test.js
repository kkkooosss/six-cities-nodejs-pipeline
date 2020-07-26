import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import Operation from './user.js';
import {Actions} from '../../actions/user/user.js';
import {AuthStatus} from '../../../helpers/constants.js';

const api = createAPI(() => {});

describe(`User operation works correctly`, () => {
  it(`Should make a correct API call to /login get authStatus`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.checkAuthStatus();

    apiMock
      .onGet(`/login`)
      .reply(200, AuthStatus.noAuth);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.setAuthStatus,
          payload: AuthStatus.noAuth
        });
      });
  });

});
