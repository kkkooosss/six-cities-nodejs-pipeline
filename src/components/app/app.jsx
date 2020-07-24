import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import OfferDetails from "../offer-details/offer-details.jsx";

import DetailsActionCreator from '../../store/actions/details/details.js';
import UserOperation from '../../store/operations/user/user.js';
import DataOperation from '../../store/operations/data/data.js';
import OfferTypes from '../../types/offer.js';
import {getDetailsOffer} from "../../store/reducers/details/selectors.js";
import {filterOffers} from '../../store/reducers/filter/selectors.js';
import {ROUTES as routes} from '../../helpers/constants.js';

const App = ({
  offers,
  onTitleClick,
  detailsOffer,
  onLogin,
  onSetFavoriteStatus,
  handleTitleClick
}) => (

  <BrowserRouter>
    <Switch>
      <Route exact path={routes.main}
        render={(props) => {
          return (
            <Main
              {...props}
              offers={offers}
              onSetFavoriteStatus={onSetFavoriteStatus}
              onTitleClick={onTitleClick}
            />
          );
        }}
      />
      <Route exact path={routes.details}
        render={({match}) => {
          const {id} = match.params;
          return (
            <OfferDetails
              offerId={id}
              offer={detailsOffer}
              onSetFavoriteStatus={onSetFavoriteStatus}
            />
          );
        }}
      />
      <Route exact path={routes.favorites}
        render={() => {
          return (
            <Favorites
              onTitleClick={handleTitleClick}
              onSetFavoriteStatus={onSetFavoriteStatus}
            />
          );
        }}
      />
      <Route exact path={routes.login}
        render={() => {
          return (
            <Login
              onLogin={onLogin}
            />
          );
        }}
      />
    </Switch>
  </BrowserRouter>

);

const mapStateToProps = (state) => ({
  offers: filterOffers(state),
  detailsOffer: getDetailsOffer(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick: (offer) => {
    dispatch(DetailsActionCreator.setDetailsOffer(offer));
  },

  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },

  onSetFavoriteStatus(offerId, isFavorite) {
    dispatch(DataOperation.setFavoriteStatus(offerId, isFavorite));
  },

  handleTitleClick: (offer) => {
    dispatch(DetailsActionCreator.setDetailsOffer(offer));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  detailsOffer: OfferTypes,
  onTitleClick: PropTypes.func,
  onLogin: PropTypes.func,
  onSetFavoriteStatus: PropTypes.func.isRequired,
  handleTitleClick: PropTypes.func
};
