import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferTypes from '../../types/offer';
import Header from '../header/header.jsx';
import OfferCard from '../offer-card/offer-card.jsx';
import Footer from '../footer/footer.jsx';
import {getFavorites} from '../../store/reducers/data/selectors.js';
import DataOperation from '../../store/operations/data/data.js';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import {CARD_TYPES} from '../../helpers/constants.js';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onRequestFavorites} = this.props;
    onRequestFavorites();
  }

  render() {
    const {favorites, onSetFavoriteStatus, onTitleClick} = this.props;
    const cities = [...new Set(favorites.map((offer) => offer.city.name))].sort();
    const hasFavorites = favorites.length > 0;

    return hasFavorites ? (
      <div className="page">

        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {cities.map((city) => (
                  <li className="favorites__locations-items" key={city}>

                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>

                    <div className="favorites__places">

                      {favorites.filter((offer) => offer.city.name === city).map((offer) => (
                        <OfferCard
                          offer={offer}
                          onCardHover={() => {}}
                          onCardHoverLeave={() => {}}
                          onSetFavoriteStatus={onSetFavoriteStatus}
                          onTitleClick={onTitleClick}
                          key={offer.id}
                          cardType={CARD_TYPES.favorites}
                        />))}

                    </div>
                  </li>
                ))}

              </ul>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    ) : <FavoritesEmpty />;
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRequestFavorites: () => {
    dispatch(DataOperation.loadFavorites());
  }
});

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  onSetFavoriteStatus: PropTypes.func,
  onTitleClick: PropTypes.func,
  onRequestFavorites: PropTypes.func.isRequired
};
