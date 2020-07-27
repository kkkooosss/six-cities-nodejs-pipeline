import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card.jsx';
import OfferTypes from '../../types/offer.js';
import ActiveActionCreator from '../../store/actions/active/active.js';
import {filterOffersOrder} from '../../helpers/utils.js';
import {getSelectedFilter} from '../../store/reducers/filter/selectors.js';
import {getActiveOffer} from '../../store/reducers/active/selectors.js';


const OffersList = ({
  offers,
  selectedFilter,
  handleCardHover,
  handleCardHoverLeave,
  cardType,
  onSetFavoriteStatus}) => {

  const filteredOffers = filterOffersOrder(offers, selectedFilter);

  return (
  <>
    {filteredOffers.map((offer) => (
      <OfferCard
        offer={offer}
        onCardHover={handleCardHover}
        onCardHoverLeave={handleCardHoverLeave}
        onSetFavoriteStatus={onSetFavoriteStatus}
        key={offer.id}
        cardType={cardType}
      />))
    }
  </>
  );
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  selectedFilter: getSelectedFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleCardHover: (offer) => {
    dispatch(ActiveActionCreator.setActiveOffer(offer));
  },

  handleCardHoverLeave: () => {
    dispatch(ActiveActionCreator.removeActiveOffer());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  handleCardHover: PropTypes.func,
  handleCardHoverLeave: PropTypes.func,
  cardType: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  onSetFavoriteStatus: PropTypes.func
};
