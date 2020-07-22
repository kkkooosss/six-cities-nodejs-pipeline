import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import OfferTypes from '../../types/offer.js';
import {getRatingInPercents} from '../../helpers/utils.js';

const OfferCard = ({offer, onTitleClick, onCardHover, onCardHoverLeave, isNearPlacesCard}) => {

  const {
    isPremium,
    title,
    previewImage,
    price,
    rating,
    type
  } = offer;

  const stars = getRatingInPercents(rating);

  return (
    <article className={`place-card ${isNearPlacesCard ? `near-places__card` : `cities__place-card`}`} onMouseOver={() => onCardHover(offer)} onMouseLeave={() => onCardHoverLeave()}>
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : null}
      <div className={`place-card__image-wrapperd ${isNearPlacesCard ? `near-places__image-wrapper` : `cities__image-wrapper`}`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
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
            <span style={{width: stars}} />
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <Link to={`/offer/${offer.id}`}>
          <h2 className="place-card__name" onClick={() => onTitleClick(offer)}>
            {title}
          </h2>
        </Link>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;

OfferCard.propTypes = {
  offer: OfferTypes.isRequired,
  onTitleClick: PropTypes.func,
  onCardHover: PropTypes.func,
  onCardHoverLeave: PropTypes.func,
  isNearPlacesCard: PropTypes.bool.isRequired
};
