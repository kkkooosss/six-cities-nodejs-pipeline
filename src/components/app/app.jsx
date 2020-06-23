import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import {OfferTypes} from '../../types/types.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, offersCount} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main offers={offers} offersCount={offersCount} />
          </Route>
          <Route exact path="/dev-details">
            <OfferDetails offer={offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired
};

export default App;
