import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app.jsx';
import reducer from './store/reducer.js';
import DataOperation from './store/operations/data/data.js';
import UserOperation from './store/operations/user/user.js';
import createAPI from './api/api.js';

import UserActionCreator from './store/actions/user/user.js';
import {AuthorizationStatus} from './store/reducers/user/user.js';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(DataOperation.loadCities());
store.dispatch(UserOperation.checkAuthorizationStatus());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
