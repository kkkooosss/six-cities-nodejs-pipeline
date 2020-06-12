import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const offersData = {
  offersCount: 312,
  offersTitles: [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};

ReactDOM.render(
    <App
      offersCount={offersData.offersCount}
      offersTitles={offersData.offersTitles} />,
    document.getElementById(`root`)
);
