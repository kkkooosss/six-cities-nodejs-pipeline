import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import {OfferTypes} from '../../types/types.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOffer: null
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(offer) {
    this.setState({
      selectedOffer: offer,
    });
  }

  _renderApp() {
    const {offers, offersCount} = this.props;
    const {selectedOffer} = this.state;

    return (
      !selectedOffer
        ? <Main offers={offers} offersCount={offersCount} onTitleClick={this.handleTitleClick} />
        : <OfferDetails offer={selectedOffer} />
    );
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
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
