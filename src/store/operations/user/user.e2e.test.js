import MockAdapter from 'axios-mock-adapter';

import createAPI from '../../../api/api.js';
import Operation from './user.js';
import {Actions} from '../../actions/user/user.js';
import {AuthStatus} from '../../../helpers/constants.js';
import rawUser from '../../../mocks/raw-user.js';
import mockUser from '../../../mocks/user.js';

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);

const mockAuthData = {
  email: `mail@email.com`,
  password: `1234`
};

apiMock
  .onGet(`/login`).reply(200, AuthStatus.noAuth)
  .onPost(`/login`).reply(200, rawUser);

describe(`User operation works correctly`, () => {

  it(`Should make a correct API call to /login and get authStatus`, () => {
    const dispatch = jest.fn();
    const dataLoader = Operation.checkAuthStatus();

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.setAuthStatus,
          payload: AuthStatus.noAuth
        });
      });
  });

  it(`Shoul make a correct API call to /login and sign in`, () => {
    const dispatch = jest.fn();
    const dataLoader = Operation.login(mockAuthData);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.setUser,
          payload: mockUser
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Actions.setAuthStatus,
          payload: AuthStatus.auth
        });
      });

  });

});
