import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card.jsx';
import OfferTypes from '../../types/offer.js';
import {ActionCreator} from '../../store/reducer.js';

const OffersList = ({offers, onTitleClick, handleCardHover, handleCardHoverLeave, isNearPlacesList}) => (
  <>
    {offers.map((offer) => <OfferCard offer={offer} onCardHover={handleCardHover} onCardHoverLeave={handleCardHoverLeave} onTitleClick={onTitleClick} key={offer.id} isNearPlacesCard={isNearPlacesList} />)}
  </>
);

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer
});

const mapDispatchToProps = (dispatch) => ({
  handleCardHover: (offer) => {
    dispatch(ActionCreator.setActiveOffer(offer));
  },

  handleCardHoverLeave: () => {
    dispatch(ActionCreator.removeActiveOffer());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func,
  handleCardHover: PropTypes.func,
  handleCardHoverLeave: PropTypes.func,
  isNearPlacesList: PropTypes.bool.isRequired
};
