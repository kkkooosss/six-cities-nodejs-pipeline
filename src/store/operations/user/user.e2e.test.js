import MockAdapter from 'axios-mock-adapter';

import createAPI from '../../../api/api';
import Operation from './user';
import {Actions} from '../../actions/user/user';
import {Actions as DataActions} from '../../actions/data/data';
import {AuthStatus} from '../../../helpers/constants';
import rawUser from '../../../test-data/raw-user';
import mockUser from '../../../test-data/user';

const api = createAPI(jest.fn());
const apiMock = new MockAdapter(api);

const mockAuthData = {
  email: `mail@email.com`,
  password: `1234`
};

apiMock
  .onGet(`/login`).reply(200, AuthStatus.NO_AUTH)
  .onPost(`/login`).reply(200, rawUser);

describe(`User operation works correctly`, () => {

  it(`Should make a correct API call to /login and get authStatus`, () => {
    const dispatch = jest.fn();
    const dataLoader = Operation.checkAuthStatus();

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.setAuthStatus,
          payload: AuthStatus.NO_AUTH
        });
      });
  });

  it(`Should make a correct API call to /login and sign in`, () => {
    const dispatch = jest.fn();
    const dataLoader = Operation.login(mockAuthData);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.setLoadingFlag,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Actions.setUser,
          payload: mockUser
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: Actions.setAuthStatus,
          payload: AuthStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: DataActions.setLoadingFlag,
          payload: false
        });
      });

  });

});
