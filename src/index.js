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
import ReviewOperation from './store/operations/review/review.js';
import {AuthorizationStatus} from './store/reducers/user/user.js';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuthorizationStatus());

const onRequestReviews = (offerId) => {
  store.dispatch(ReviewOperation.loadReviews(offerId));
};

const onRequestNearOffers = (offerId) => {
  store.dispatch(DataOperation.loadNearOffers(offerId));
};


ReactDOM.render(
    <Provider store={store}>
      <App
        onRequestReviews={onRequestReviews}
        onRequestNearOffers={onRequestNearOffers}
      />
    </Provider>,
    document.getElementById(`root`) || document.createElement(`div`)
);
