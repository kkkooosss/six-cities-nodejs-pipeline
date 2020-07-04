import React from 'react';
import PropTypes from 'prop-types';

import OfferTypes from '../../types/offer.js';

const OfferCard = ({offer, onTitleClick, onCardHover, onCardHoverLeave, isNearPlacesCard}) => (

  <article className={`place-card ${isNearPlacesCard ? `near-places__card` : `cities__place-card`}`} onMouseOver={() => onCardHover(offer)} onMouseLeave={() => onCardHoverLeave()}>
    {offer.isPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : null}
    <div className={`place-card__image-wrapperd ${isNearPlacesCard ? `near-places__image-wrapper` : `cities__image-wrapper`}`}>
      <a href="#">
        <img
          className="place-card__image"
          src={offer.img}
          width={260}
          height={200}
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{`€${offer.price}`}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg
            className="place-card__bookmark-icon"
            width={18}
            height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `80%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name" onClick={() => onTitleClick(offer)}>
        <a href="#">
          {offer.title}
        </a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

export default OfferCard;

OfferCard.propTypes = {
  offer: OfferTypes.isRequired,
  onTitleClick: PropTypes.func,
  onCardHover: PropTypes.func,
  onCardHoverLeave: PropTypes.func,
  isNearPlacesCard: PropTypes.bool.isRequired
};
