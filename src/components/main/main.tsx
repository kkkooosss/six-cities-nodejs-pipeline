import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list';
import OfferTypes from '../../types/offer';
import OffersSort from '../offers-sort/offers-sort';
import CitiesList from '../cities-list/cities-list';
import Loader from '../loader/loader';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import OffersEmpty from '../../components/offers-empty/offers-empty';

import {reduceCities, reduceOffers} from '../../helpers/utils';
import FilterActionCreator from '../../store/actions/filter/filter';

import {getSelectedCity} from '../../store/reducers/filter/selectors';
import {getCities, getLoadingFlag} from '../../store/reducers/data/selectors';
import {CARD_TYPES} from '../../helpers/constants';

const Main = ({offers, cities, selectedCity, onCitySelect, onSetFavoriteStatus, loading}) => {

  const reducedCities = reduceCities(cities);
  const reducedOffers = reduceOffers(offers);
  const offersCount = offers.length;
  const areOffersEmpty = offersCount < 1;

  return loading ? <Loader /> : (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${areOffersEmpty ? `page__main--index-empty` : null}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={reducedCities} selectedCity={selectedCity} onCitySelect={(city) => onCitySelect(city)} />
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
                  <OffersList offers={reducedOffers} onSetFavoriteStatus={onSetFavoriteStatus} cardType={CARD_TYPES.cities} />
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
  loading: getLoadingFlag(state),
  cities: getCities(state),
  selectedCity: getSelectedCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect: (city) => {
    dispatch(FilterActionCreator.selectCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func,
  onSetFavoriteStatus: PropTypes.func
};
