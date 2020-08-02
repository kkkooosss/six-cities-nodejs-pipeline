import * as React from 'react';
import {Link} from 'react-router-dom';

import {getRatingInPercents} from '../../helpers/utils';
import {CARD_CLASSES, WRAPPER_CLASSES, IMAGE_SIZES} from '../../helpers/constants';
import Offer from '../../interfaces/offer';

interface Props {
  offer: Offer;
  cardType: string;
  onCardHover: (offer: Offer) => void;
  onCardHoverLeave: () => void;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
}

const OfferCard = (props: Props) => {
  const {offer, onCardHover, onCardHoverLeave, cardType, onSetFavoriteStatus} = props;
  const {
    id,
    isPremium,
    title,
    isFavorite,
    previewImage,
    price,
    rating,
    type
  } = offer;

  const cardClass = CARD_CLASSES[cardType];
  const wrapperClass = WRAPPER_CLASSES[cardType];
  const imageWidth = IMAGE_SIZES[cardType].width;
  const imageHeight = IMAGE_SIZES[cardType].height;

  const stars = getRatingInPercents(rating);

  return (
    <article
      className={`place-card ${cardClass}`}
      onMouseOver={() => onCardHover(offer)}
      onMouseLeave={() => onCardHoverLeave()}
    >
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : null}
      <div
        className={`place-card__image-wrapper ${wrapperClass}`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
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
          <button
            className={`${isFavorite ? `place-card__bookmark-button--active` : `place-card__bookmark-button`} button`}
            type="button"
            onClick={() => onSetFavoriteStatus(id, isFavorite)}
          >
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
        <Link to={`/offer/${id}`}>
          <h2 className="place-card__name">
            {title}
          </h2>
        </Link>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;
