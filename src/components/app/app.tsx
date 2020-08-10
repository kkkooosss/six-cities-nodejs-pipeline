import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import OfferDetails from '../offer-details/offer-details';

import UserOperation from '../../store/operations/user/user';
import DataOperation from '../../store/operations/data/data';
import {filterOffers} from '../../store/reducers/filter/selectors';
import {Routes} from '../../helpers/constants';
import {getAuthStatus, getLoginErrorFlag} from '../../store/reducers/user/selectors';
import {AuthStatus} from '../../helpers/constants';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import {getLoadingFlag} from '../../store/reducers/data/selectors';
import Offer from '../../interfaces/offer';
import ActiveActionCreator from '../../store/actions/active/active';
import UserActionCreator from '../../store/actions/user/user';

interface Props {
  offers: Offer[];
  authStatus: string;
  loading: boolean;
  loginError: boolean;
  onLogin: (authData: boolean) => void;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
  onCardHover: (offer: Offer) => void;
  onCardHoverLeave: () => void;
  onResetLoginError: () => void;
}

const App = (props: Props) => {
  const {offers, authStatus, onResetLoginError, loading, loginError, onLogin, onSetFavoriteStatus, onCardHover, onCardHoverLeave} = props;
  const isAuthorized = authStatus === AuthStatus.AUTH;
  const FavoritesWrapped = withPrivateRoute(Favorites, isAuthorized);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}
          render={() => {
            return (
              <Main
                offers={offers}
                onSetFavoriteStatus={onSetFavoriteStatus}
                onCardHover={onCardHover}
                onCardHoverLeave={onCardHoverLeave}
              />
            );
          }}
        />
        <Route exact path={Routes.DETAILS}
          render={({match}) => {
            const {id} = match.params;
            return (
              <OfferDetails
                offerId={id}
                onSetFavoriteStatus={onSetFavoriteStatus}
                onCardHover={onCardHover}
                onCardHoverLeave={onCardHoverLeave}
              />
            );
          }}
        />
        <Route exact path={Routes.FAVORITES}
          render={() => {
            return (
              <FavoritesWrapped
                onSetFavoriteStatus={onSetFavoriteStatus}
                onCardHover={onCardHover}
                onCardHoverLeave={onCardHoverLeave}
              />
            );
          }}
        />
        <Route exact path={Routes.LOGIN}
          render={() => {
            return (
              <Login
                onLogin={onLogin}
                loading={loading}
                loginError={loginError}
                onResetLoginError={onResetLoginError}
                isAuthorized={isAuthorized}
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
  authStatus: getAuthStatus(state),
  loginError: getLoginErrorFlag(state)
});

const mapDispatchToProps = (dispatch) => ({

  onLogin(authData: boolean) {
    dispatch(UserOperation.login(authData));
  },

  onResetLoginError() {
    dispatch(UserActionCreator.setLoginError(false));
  },

  onSetFavoriteStatus(offerId: number | string, isFavorite: boolean) {
    dispatch(DataOperation.setFavoriteStatus(offerId, isFavorite));
  },

  onCardHover: (offer: Offer) => {
    dispatch(ActiveActionCreator.setActiveOffer(offer));
  },

  onCardHoverLeave: () => {
    dispatch(ActiveActionCreator.removeActiveOffer());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
