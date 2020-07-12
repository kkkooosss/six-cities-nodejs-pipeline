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

import {reduceCities, reduceOffers} from '../../selectors/selectors.js';
import FilterActionCreator from '../../store/actions/filter/filter.js';

import {filterOffers} from '../../store/reducers/filter/selectors.js';
import {getSelectedCity} from '../../store/reducers/filter/selectors.js';
import {getCities} from '../../store/reducers/data/selectors.js';

const Main = ({offers, cities, selectedCity, onCitySelect, onTitleClick}) => {

  const reducedCities = reduceCities(cities);
  const reducedOffers = reduceOffers(offers);
  const offersCount = offers.length;
  const areOffersEmpty = offersCount < 1;

  return (
    <div className="page page--gray page--main">
      <Header isAuthorized={false} user={{}} />

      <main className={`page__main page__main--index ${areOffersEmpty ? `page__main--index-empty` : null}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={reducedCities} selectedCity={selectedCity} onCitySelect={(city) => onCitySelect(offers, city)} />
        </div>

        {areOffersEmpty
          ? <OffersEmpty />
          : <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in {selectedCity}</b>
                <OffersSort />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={reducedOffers} onTitleClick={onTitleClick} isNearPlacesList={false} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={reducedOffers} isPropertyMap={false} />
              </div>
            </div>
          </div>
        }

      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: filterOffers(state),
  cities: getCities(state),
  selectedCity: getSelectedCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect: (offers, city) => {
    dispatch(FilterActionCreator.selectCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func,
  onTitleClick: PropTypes.func
};
