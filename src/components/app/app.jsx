import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = ({offersCount, offersTitles}) => <Main offersCount={offersCount} offersTitles={offersTitles} />;

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offersTitles: PropTypes.arrayOf(PropTypes.string)
};

export default App;
