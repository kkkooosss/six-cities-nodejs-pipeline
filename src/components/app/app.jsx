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
import {getDetailsOffer} from '../../store/reducers/details/selectors.js';
import UserOperation from '../../store/operations/user/user.js';
import mockDetailsOffer from '../../mocks/details.js';
import history from '../../history.js';
import ReviewForm from "../review-form/review-form.jsx";

const App = ({reviews, onTitleClick, detailsOffer, onLogin}) => (

  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/">
        {!detailsOffer
          ? <Main onTitleClick={onTitleClick} />
          : <OfferDetails offer={detailsOffer} reviews={reviews}/> }
      </Route>
      <Route exact path="/dev-details">
        <OfferDetails offer={mockDetailsOffer} reviews={reviews} />
      </Route>
      <Route exact path="/dev-review">
        <ReviewForm />
      </Route>
      <Route exact path="/signin">
        <Login onLogin={onLogin} />
      </Route>
    </Switch>
  </BrowserRouter>

);

const mapStateToProps = (state) => ({
  detailsOffer: getDetailsOffer(state)
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
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func,
  detailsOffer: OfferTypes,
  onLogin: PropTypes.func,
};
