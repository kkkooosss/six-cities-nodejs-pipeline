import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';
import OfferTypes from '../../types/offer.js';

const OffersList = ({offers, onTitleClick, handleCardHover, isNearPlacesList}) => (
  <>
    {offers.map((offer) => <OfferCard offer={offer} onCardHover={handleCardHover} onTitleClick={onTitleClick} key={offer.id} isNearPlacesCard={isNearPlacesList} />)}
  </>
);

export default OffersList;

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func,
  handleCardHover: PropTypes.func,
  isNearPlacesList: PropTypes.bool.isRequired
};
