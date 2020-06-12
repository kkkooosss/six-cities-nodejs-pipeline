import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const offersData = {
  offersCount: 312
};

ReactDOM.render(
    <App offersCount={offersData.offersCount} />,
    document.getElementById(`root`)
);
