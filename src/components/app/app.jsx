import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";

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
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};

export default App;
