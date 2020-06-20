import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = ({offers, offersCount}) => (
  <Main offers={offers} offersCount={offersCount} />
);

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
