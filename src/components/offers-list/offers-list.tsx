import * as React from 'react';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card';

import {filterOffersOrder} from '../../helpers/utils';
import {getSelectedFilter} from '../../store/reducers/filter/selectors';
import {getActiveOffer} from '../../store/reducers/active/selectors';
import Offer from '../../interfaces/offer';

interface Props {
  offers: Offer[];
  cardType: string;
  selectedFilter: string;
  onCardHover: (offer: Offer) => void;
  onCardHoverLeave: () => void;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
}

const OffersList = (props: Props) => {
  const {offers, selectedFilter, onCardHover, onCardHoverLeave, cardType, onSetFavoriteStatus} = props;
  const filteredOffers = filterOffersOrder(offers, selectedFilter);

  return (
  <>
    {filteredOffers.map((offer) => (
      <OfferCard
        offer={offer}
        onCardHover={onCardHover}
        onCardHoverLeave={onCardHoverLeave}
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

export default connect(mapStateToProps, null)(OffersList);
