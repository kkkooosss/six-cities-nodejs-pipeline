import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import offers from './mocks/offers.js';
import reviews from './mocks/reviews.js';

const offersCount = offers.length;

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
      offersCount={offersCount}
    />,
    document.getElementById(`root`)
);
