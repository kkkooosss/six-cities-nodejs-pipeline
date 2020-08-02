import * as React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import OfferDetails from '../offer-details/offer-details';

import UserOperation from '../../store/operations/user/user';
import DataOperation from '../../store/operations/data/data';
import OfferTypes from '../../types/offer';
import {filterOffers} from '../../store/reducers/filter/selectors';
import {ROUTES} from '../../helpers/constants';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import {AUTH_STATUS} from '../../helpers/constants';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import {getLoadingFlag} from '../../store/reducers/data/selectors';

const App = ({
  offers,
  authStatus,
  loading,
  onLogin,
  onSetFavoriteStatus,
}) => {
  const isAuthorized = authStatus === AUTH_STATUS.auth;
  const FavoritesWrapped = withPrivateRoute(Favorites, isAuthorized);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.main}
          render={(props) => {
            return (
              <Main
                {...props}
                offers={offers}
                onSetFavoriteStatus={onSetFavoriteStatus}
              />
            );
          }}
        />
        <Route exact path={ROUTES.details}
          render={({match}) => {
            const {id} = match.params;
            return (
              <OfferDetails
                offerId={id}
                onSetFavoriteStatus={onSetFavoriteStatus}
              />
            );
          }}
        />
        <Route exact path={ROUTES.favorites}
          render={() => {
            return (
              <FavoritesWrapped
                onSetFavoriteStatus={onSetFavoriteStatus}
              />
            );
          }}
        />
        <Route exact path={ROUTES.login}
          render={() => {
            return (
              <Login
                onLogin={onLogin}
                loading={loading}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: filterOffers(state),
  loading: getLoadingFlag(state),
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({

  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },

  onSetFavoriteStatus(offerId, isFavorite) {
    dispatch(DataOperation.setFavoriteStatus(offerId, isFavorite));
  },

});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  authStatus: PropTypes.string.isRequired,
  onLogin: PropTypes.func,
  onSetFavoriteStatus: PropTypes.func.isRequired,
  handleTitleClick: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};
