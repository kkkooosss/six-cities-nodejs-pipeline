import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createStore, applyMiddleware} from 'redux';

import createAPI from '../api/api';
import reducer from './reducer';
import DataOperation from './operations/data/data';
import UserOperation from './operations/user/user';

import UserActionCreator from './actions/user/user';
import {AUTH_STATUS} from '../helpers/constants';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthStatus(AUTH_STATUS.noAuth));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export const initApp = () => {
  store.dispatch(DataOperation.loadOffers());
  store.dispatch(UserOperation.checkAuthStatus());
};

export default store;
