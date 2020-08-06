import * as React from 'react';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card';

import {filterOffersOrder} from '../../helpers/utils';
import {AuthStatus} from '../../helpers/constants';
import {getSelectedFilter} from '../../store/reducers/filter/selectors';
import {getActiveOffer} from '../../store/reducers/active/selectors';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import Offer from '../../interfaces/offer';

interface Props {
  offers: Offer[];
  authStatus: string;
  cardType: string;
  selectedFilter: string;
  onCardHover: (offer: Offer) => void;
  onCardHoverLeave: () => void;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
}

const OffersList = (props: Props) => {
  const {offers, authStatus, selectedFilter, onCardHover, onCardHoverLeave, cardType, onSetFavoriteStatus} = props;
  const filteredOffers = filterOffersOrder(offers, selectedFilter);
  const isAuthorized = authStatus === AuthStatus.AUTH;

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
        isAuthorized={isAuthorized}
      />))
    }
  </>
  );
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  selectedFilter: getSelectedFilter(state),
  authStatus: getAuthStatus(state)
});

export default connect(mapStateToProps, null)(OffersList);
