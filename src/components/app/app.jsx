import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import OfferTypes from '../../types/offer.js';
import ReviewTypes from '../../types/review.js';
import DetailsActionCreator from '../../store/actions/details/details.js';
import Login from '../login/login.jsx';
import {getOffers} from '../../store/reducers/data/selectors.js';
import {getDetailsOffer} from '../../store/reducers/details/selectors.js';
import UserOperation from '../../store/operations/user/user.js';

const App = ({offers, reviews, onTitleClick, detailsOffer, onLogin}) => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {!detailsOffer
          ? <Main onTitleClick={onTitleClick} />
          : <OfferDetails offer={detailsOffer} reviews={reviews}/> }
      </Route>
      <Route exact path="/dev-details">
        <OfferDetails offer={offers[0]} reviews={reviews}/>
      </Route>
      <Route exact path="/dev-login">
        <Login onSubmit={onLogin} />
      </Route>
    </Switch>
  </BrowserRouter>

);

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  detailsOffer: getDetailsOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick: (offer) => {
    dispatch(DetailsActionCreator.setDetailsOffer(offer));
  },
  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func,
  detailsOffer: OfferTypes,
  onLogin: PropTypes.func
};
