import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import OfferTypes from '../../types/offer.js';
import DetailsActionCreator from '../../store/actions/details/details.js';
import Login from '../login/login.jsx';
import UserOperation from '../../store/operations/user/user.js';
import {getDetailsOffer} from "../../store/reducers/details/selectors.js";

const App = ({
  onTitleClick,
  detailsOffer,
  onLogin,
  onRequestReviews,
  onRequestNearOffers
}) => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main onTitleClick={onTitleClick} />
      </Route>
      <Route exact path="/offer/:id"
        render={({match}) => {
          const {id} = match.params;
          return (
            <OfferDetails
              offerId={id}
              offer={detailsOffer}
              onRequestReviews={onRequestReviews}
              onRequestNearOffers={onRequestNearOffers}
            />
          );
        }}/>
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

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  detailsOffer: OfferTypes,
  onTitleClick: PropTypes.func,
  onLogin: PropTypes.func,
  onRequestReviews: PropTypes.func.isRequired,
  onRequestNearOffers: PropTypes.func.isRequired
};
