import * as React from 'react';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card';
import ActiveActionCreator from '../../store/actions/active/active';
import {filterOffersOrder} from '../../helpers/utils';
import {getSelectedFilter} from '../../store/reducers/filter/selectors';
import {getActiveOffer} from '../../store/reducers/active/selectors';
import Offer from '../../interfaces/offer';

interface Props {
  offers: Offer[];
  cardType: string;
  selectedFilter: string;
  handleCardHover: (offer: Offer) => void;
  handleCardHoverLeave: () => void;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
}

const OffersList = (props: Props) => {
  const {offers, selectedFilter, handleCardHover, handleCardHoverLeave, cardType, onSetFavoriteStatus} = props;
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
  handleCardHover: (offer: Offer) => {
    dispatch(ActiveActionCreator.setActiveOffer(offer));
  },

  handleCardHoverLeave: () => {
    dispatch(ActiveActionCreator.removeActiveOffer());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
