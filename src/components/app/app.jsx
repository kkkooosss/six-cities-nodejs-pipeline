import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import OfferTypes from '../../types/offer.js';
import ReviewTypes from '../../types/review.js';
import {ActionCreator} from '../../store/reducer.js';

const App = ({offers, reviews, onTitleClick, detailsOffer}) => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {!detailsOffer
          ? <Main offers={offers} onTitleClick={onTitleClick} />
          : <OfferDetails offer={detailsOffer} offers={offers} reviews={reviews}/> }
      </Route>
      <Route exact path="/dev-details">
        <OfferDetails offer={offers[0]} reviews={reviews} offers={offers}/>
      </Route>
    </Switch>
  </BrowserRouter>

);

const mapStateToProps = (state) => ({
  detailsOffer: state.detailsOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick: (offer) => {
    dispatch(ActionCreator.setDetailsOffer(offer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  detailsOffer: OfferTypes
};
