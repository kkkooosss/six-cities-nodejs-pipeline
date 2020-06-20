import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = ({offers, offersCount}) => (
  <Main offers={offers} offersCount={offersCount} />
);

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired
};

export default App;
