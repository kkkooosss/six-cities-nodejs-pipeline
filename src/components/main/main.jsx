import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list.jsx';
import OfferTypes from '../../types/offer.js';
import OffersSort from '../offers-sort/offers-sort.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import Map from '../../components/map/map.jsx';
import Header from '../../components/header/header.jsx';
import OffersEmpty from '../../components/offers-empty/offers-empty.jsx';

import {getCitiesTitles} from '../../helpers/helpers.js';
import {filterOffers, reduceCities} from '../../selectors/selectors.js';
import FilterActionCreator from '../../store/actions/filter/filter.js';

import {getOffers} from '../../store/reducers/data/selectors.js';
import {getSelectedCity, getSelectedOffers} from '../../store/reducers/filter/selectors.js';

const Main = ({offers, selectedOffers, selectedCity, onCitySelect, onTitleClick}) => {

  const cities = reduceCities(getCitiesTitles(offers));
  const offersToRender = selectedOffers.length > 0 ? selectedOffers : filterOffers(offers, selectedCity);
  const offersCount = offersToRender.length;
  const areOffersEmpty = offersCount < 1;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${areOffersEmpty ? `page__main--index-empty` : null}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} selectedCity={selectedCity} onCitySelect={(city) => onCitySelect(offers, city)} />
        </div>

        {areOffersEmpty
          ? <OffersEmpty city={selectedCity} />
          : <div className="cities">
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
        }

      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  selectedCity: getSelectedCity(state),
  selectedOffers: getSelectedOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect: (offers, city) => {
    dispatch(FilterActionCreator.selectCity(city));
    dispatch(FilterActionCreator.selectOffers(offers, city));
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
