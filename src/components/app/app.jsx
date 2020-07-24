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

const App = ({
  offers,
  onTitleClick,
  detailsOffer,
  onLogin,
  onRequestReviews,
  onRequestNearOffers,
  onSetFavoriteStatus,
  handleTitleClick
}) => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/"
        render={(props) => {
          return (
            <Main
              {...props}
              offers={offers}
              onSetFavoriteStatus={onSetFavoriteStatus}
              onTitleClick={onTitleClick}
            />
          );
        }}/>
      <Route exact path="/offer/:id"
        render={({match}) => {
          const {id} = match.params;
          return (
            <OfferDetails
              offerId={id}
              offer={detailsOffer}
              onRequestReviews={onRequestReviews}
              onRequestNearOffers={onRequestNearOffers}
              onSetFavoriteStatus={onSetFavoriteStatus}
            />
          );
        }}/>
      <Route exact path="/favorites"
        render={() => {
          return (
            <Favorites
              onTitleClick={handleTitleClick}
            />
          );
        }} />
      <Route exact path="/signin">
        <Login onLogin={onLogin} />
      </Route>
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
  onRequestReviews: PropTypes.func.isRequired,
  onRequestNearOffers: PropTypes.func.isRequired,
  onSetFavoriteStatus: PropTypes.func.isRequired,
  handleTitleClick: PropTypes.func
};
