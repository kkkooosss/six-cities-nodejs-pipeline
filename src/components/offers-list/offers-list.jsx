import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card.jsx';
import OfferTypes from '../../types/offer.js';
import ActiveActionCreator from '../../store/actions/active/active.js';
import DetailsActionCreator from '../../store/actions/details/details.js';
import {filterOffersOrder} from '../../helpers/utils.js';
import {getSelectedFilter} from '../../store/reducers/filter/selectors.js';
import {getActiveOffer} from '../../store/reducers/active/selectors.js';


const OffersList = ({
  offers,
  handleTitleClick,
  selectedFilter,
  handleCardHover,
  handleCardHoverLeave,
  isNearPlacesList,
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
        onTitleClick={handleTitleClick}
        key={offer.id}
        isNearPlacesCard={isNearPlacesList}
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

  handleTitleClick: (offer) => {
    dispatch(DetailsActionCreator.setDetailsOffer(offer));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  handleTitleClick: PropTypes.func,
  handleCardHover: PropTypes.func,
  handleCardHoverLeave: PropTypes.func,
  isNearPlacesList: PropTypes.bool.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  onSetFavoriteStatus: PropTypes.func
};
