import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import Loader from '../loader/loader.jsx';
import Header from '../header/header.jsx';
import {getRatingInPercents} from '../../helpers/utils.js';

import OfferTypes from '../../types/offer.js';
import DataActionsCreator from '../../store/actions/data/data.js';
import DataOperation from '../../store/operations/data/data.js';
import ReviewOperation from '../../store/operations/review/review.js';
import {reduceOffers} from '../../helpers/utils.js';
import {getSelectedCity} from '../../store/reducers/filter/selectors.js';
import {getOfferById, getNearOffers, getOffers} from '../../store/reducers/data/selectors.js';

class OfferDetails extends React.PureComponent {

  componentDidMount() {
    const {onRequestNearOffers, setDetailsOfferId, offerId} = this.props;
    setDetailsOfferId(offerId);

    onRequestNearOffers(offerId);
  }

  componentDidUpdate(prevProps) {
    const {onRequestNearOffers, setDetailsOfferId, offerId} = this.props;

    if (offerId !== prevProps.offerId) {
      setDetailsOfferId(offerId);
      onRequestNearOffers(offerId);
    }
  }

  render() {
    if (this.props.offer) {
      const {offer, nearOffers, onRequestReviews, onSetFavoriteStatus} = this.props;
      const {
        id,
        title,
        type,
        isPremium,
        isFavorite,
        price,
        images,
        host,
        rating,
        bedrooms,
        capacity,
        amenities,
        description
      } = offer;

      const reducedOffers = reduceOffers(nearOffers);
      const stars = getRatingInPercents(rating);

      return (
        <div className="page">
          <Header />

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {images.map((image, i) => (
                    <div className="property__image-wrapper" key={`key-${i}`}>
                      <img className="property__image" src={image} alt={`${type} photo`} />
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
                    <button
                      className={`${isFavorite ? `property__bookmark-button--active` : `property__bookmark-button`} button`}
                      type="button"
                      onClick={() => onSetFavoriteStatus(id, isFavorite)}
                    >
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
                        {description}
                      </p>
                    </div>
                  </div>

                  <ReviewsList offerId={id} onRequestReviews={onRequestReviews} />

                </div>
              </div>
            </section>
            <Map offers={reducedOffers} isPropertyMap={true} currentOffer={offer} />

            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <OffersList offers={reducedOffers} onSetFavoriteStatus={onSetFavoriteStatus} isNearPlacesList={true} />

                </div>
              </section>

            </div>
          </main>
        </div>);
    } else {
      return <Loader />;
    }
  }
}

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  offer: getOfferById(state),
  nearOffers: getNearOffers(state),
  selectedCity: getSelectedCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRequestReviews: (offerId) => {
    dispatch(ReviewOperation.loadReviews(offerId));
  },

  setDetailsOfferId: (offerId) => {
    const newOfferId = parseInt(offerId, 10);
    dispatch(DataActionsCreator.setDetailsOfferId(newOfferId));
  },

  onRequestNearOffers: (offerId) => {
    dispatch(DataOperation.loadNearOffers(offerId));
  },

});

export {OfferDetails};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);

OfferDetails.propTypes = {
  offerId: PropTypes.string,
  offer: OfferTypes,
  nearOffers: PropTypes.arrayOf(OfferTypes.isRequired),
  selectedCity: PropTypes.string,
  selectedOffers: PropTypes.arrayOf(OfferTypes.isRequired),
  onRequestReviews: PropTypes.func.isRequired,
  onRequestNearOffers: PropTypes.func.isRequired,
  onSetFavoriteStatus: PropTypes.func.isRequired,
  setDetailsOfferId: PropTypes.func.isRequired
};
