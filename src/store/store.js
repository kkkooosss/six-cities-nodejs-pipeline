import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createStore, applyMiddleware} from 'redux';

import createAPI from '../api/api.js';
import reducer from './reducer.js';
import DataOperation from './operations/data/data.js';
import UserOperation from './operations/user/user.js';

import UserActionCreator from './actions/user/user.js';
import {AuthStatus} from '../helpers/constants.js';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthorizationStatus(AuthStatus.noAuth));
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
