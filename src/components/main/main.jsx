import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list.jsx';
import OfferTypes from '../../types/offer.js';
import OffersSort from '../offers-sort/offers-sort.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import Map from '../../components/map/map.jsx';


import {getCitiesTitles} from '../../helpers/helpers.js';
import {filterOffers, reduceCities} from '../../selectors/selectors.js';
import {ActionCreator} from '../../store/reducer.js';

const Main = ({offers, selectedOffers, selectedCity, onCitySelect, onTitleClick}) => {
  const cities = reduceCities(getCitiesTitles(offers));
  const offersToRender = selectedOffers.length > 0 ? selectedOffers : filterOffers(offers, selectedCity);
  const offersCount = offersToRender.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} selectedCity={selectedCity} onCitySelect={(city) => onCitySelect(offers, city)} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {selectedCity}</b>
              <OffersSort />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersToRender} onTitleClick={onTitleClick} isNearPlacesList={false} />
              </div>

            </section>
            <div className="cities__right-section">
              <Map offers={offersToRender} isPropertyMap={false} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  selectedOffers: state.selectedOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect: (offers, city) => {
    dispatch(ActionCreator.selectCity(city));
    dispatch(ActionCreator.selectOffers(offers, city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  selectedOffers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func,
  onTitleClick: PropTypes.func
};
