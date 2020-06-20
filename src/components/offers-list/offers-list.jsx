import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

const OffersList = ({offers, handleClick}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <OfferCard offer={offer} handleClick={handleClick} key={offer.id}/>)}
  </div>
);

export default OffersList;

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func
};
