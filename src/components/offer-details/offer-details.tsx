import * as React from 'react';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Loader from '../loader/loader';
import Header from '../header/header';
import {getRatingInPercents} from '../../helpers/utils';

import DataActionsCreator from '../../store/actions/data/data';
import DataOperation from '../../store/operations/data/data';
import ReviewOperation from '../../store/operations/review/review';
import {reduceOffers} from '../../helpers/utils';
import {getSelectedCity} from '../../store/reducers/filter/selectors';
import {getOfferById, getNearOffers, getOffers} from '../../store/reducers/data/selectors';

import {getAuthStatus} from '../../store/reducers/user/selectors';
import {getReviews} from '../../store/reducers/review/selectors';
import {CARD_TYPES} from '../../helpers/constants';
import {AUTH_STATUS} from '../../helpers/constants';

import Offer from '../../interfaces/offer';
import Review from '../../interfaces/review';

interface Props {
  offerId: string;
  selectedCity: string;
  authStatus: string;
  offer: Offer;
  nearOffers: Offer[];
  reviews: Review[];
  selectedOffers: Offer[];
  onRequestReviews: (offerId: string | number) => void;
  onRequestNearOffers: (offerId: string | number) => void;
  onSetDetailsOfferId: (offerId: string | number) => void;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
}

class OfferDetails extends React.PureComponent<Props> {

  componentDidMount() {
    const {onRequestNearOffers, onSetDetailsOfferId, onRequestReviews, offerId} = this.props;
    onSetDetailsOfferId(offerId);
    onRequestNearOffers(offerId);
    onRequestReviews(offerId);
  }

  componentDidUpdate(prevProps) {
    const {onRequestNearOffers, onSetDetailsOfferId, onRequestReviews, offerId} = this.props;

    if (offerId !== prevProps.offerId) {
      onSetDetailsOfferId(offerId);
      onRequestNearOffers(offerId);
      onRequestReviews(offerId);
    }
  }

  render() {
    if (this.props.offer) {
      const {offer, nearOffers, onSetFavoriteStatus, authStatus, reviews} = this.props;
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

      const isAuthorized = authStatus === AUTH_STATUS.auth;
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
                  {isPremium ? <div className="property__mark">
                    <span>Premium</span>
                  </div> : null}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <button
                      type="button"
                      className="button property__bookmark-button"
                      onClick={() => onSetFavoriteStatus(id, isFavorite)}
                      disabled={!isAuthorized}
                    >
                      <svg
                        className="property__bookmark-icon"
                        width={31}
                        height={33}
                        style={{
                          fill: isFavorite ? `#4481c3` : `none`,
                          stroke: isFavorite ? `#4481c3` : `#979797`
                        }}
                      >
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
                        <img className="property__avatar user__avatar" src={`/${host.userPic}`} width={74} height={74} alt="Host avatar" />
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

                  <ReviewsList
                    offerId={id}
                    isAuthorized={isAuthorized}
                    reviews={reviews}
                  />

                </div>
              </div>
            </section>
            <Map
              offers={reducedOffers}
              isPropertyMap={true}
              currentOffer={offer}
            />

            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <OffersList
                    offers={reducedOffers}
                    onSetFavoriteStatus={onSetFavoriteStatus}
                    cardType={CARD_TYPES.nearPlaces}
                  />

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
  selectedCity: getSelectedCity(state),
  authStatus: getAuthStatus(state),
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRequestReviews: (offerId) => {
    dispatch(ReviewOperation.loadReviews(offerId));
  },

  onSetDetailsOfferId: (offerId) => {
    const newOfferId = parseInt(offerId, 10);
    dispatch(DataActionsCreator.setDetailsOfferId(newOfferId));
  },

  onRequestNearOffers: (offerId) => {
    dispatch(DataOperation.loadNearOffers(offerId));
  },

});

export {OfferDetails};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
