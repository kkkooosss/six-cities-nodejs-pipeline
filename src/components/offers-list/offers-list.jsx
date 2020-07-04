import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card.jsx';
import OfferTypes from '../../types/offer.js';
import {ActionCreator} from '../../store/reducer.js';

const OffersList = ({offers, onTitleClick, handleCardHover, isNearPlacesList}) => (
  <>
    {offers.map((offer) => <OfferCard offer={offer} onCardHover={handleCardHover} onTitleClick={onTitleClick} key={offer.id} isNearPlacesCard={isNearPlacesList} />)}
  </>
);

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer
});

const mapDispatchToProps = (dispatch) => ({
  handleCardHover: (offer) => {
    dispatch(ActionCreator.setActiveOffer(offer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func,
  handleCardHover: PropTypes.func,
  isNearPlacesList: PropTypes.bool.isRequired
};
