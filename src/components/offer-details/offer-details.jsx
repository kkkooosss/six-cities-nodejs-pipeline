import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import {getRatingPercents} from '../../helpers/helpers.js';

import OfferTypes from '../../types/offer.js';
import ReviewTypes from '../../types/review.js';
import {getNearOffers, getReviews, filterOffers} from '../../selectors/selectors.js';

const OfferDetails = ({offer, offers, selectedCity, selectedOffers, reviews}) => {
  const {
    id,
    title,
    type,
    isPremium,
    price,
    photos,
    host,
    rating,
    bedrooms,
    capacity,
    amenities
  } = offer;

  const filteredOffers = filterOffers(offers, selectedCity);
  const nearbyOffers = selectedOffers.length > 0 ? getNearOffers(selectedOffers, id) : getNearOffers(filteredOffers, id);
  const sortedReviews = getReviews(reviews);

  const stars = getRatingPercents(rating);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.map((photo, i) => (
                <div className="property__image-wrapper" key={`key-${i}`}>
                  <img className="property__image" src={photo} alt={`${type} photo`} />
                </div>)
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {isPremium ? <span>Premium</span> : null}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: stars}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {capacity} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.map((amenity, i) => <li className="property__inside-item" key={`key-${i}`}>{amenity}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : null}`}>
                    <img className="property__avatar user__avatar" src={host.userPic} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <ReviewsList reviews={sortedReviews} />

            </div>
          </div>
        </section>
        <Map offers={nearbyOffers} isPropertyMap={true} currentOffer={offer} />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OffersList offers={nearbyOffers} isNearPlacesList={true} />

            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  selectedOffers: state.selectedOffers
});

export default connect(mapStateToProps, null)(OfferDetails);

OfferDetails.propTypes = {
  offer: OfferTypes.isRequired,
  offers: PropTypes.arrayOf(OfferTypes.isRequired),
  selectedCity: PropTypes.string,
  selectedOffers: PropTypes.arrayOf(OfferTypes.isRequired),
  reviews: PropTypes.arrayOf(ReviewTypes.isRequired).isRequired
};
