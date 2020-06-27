import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';
import {OfferTypes} from '../../types/offers.js';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(offer) {
    this.setState({
      activeCard: offer,
    });
  }

  render() {
    const {offers, onTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <OfferCard offer={offer} onCardHover={this.handleCardHover} onTitleClick={onTitleClick} key={offer.id} />)}
      </div>
    );
  }
}

export default OffersList;

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  onTitleClick: PropTypes.func
};
