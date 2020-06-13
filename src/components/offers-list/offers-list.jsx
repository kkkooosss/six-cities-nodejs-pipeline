import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

const OffersList = ({offersTitles}) => (
  <div className="cities__places-list places__list tabs__content">
    {offersTitles.map((offerTitle, i) => <OfferCard offerTitle={offerTitle} key={`offer-${i}`}/>)}
  </div>
);

export default OffersList;

OffersList.propTypes = {
  offersTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};
