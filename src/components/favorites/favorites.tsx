import * as React from 'react';
import {connect} from 'react-redux';

import Offer from '../../interfaces/offer';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Footer from '../footer/footer';
import {getFavorites} from '../../store/reducers/data/selectors';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import DataOperation from '../../store/operations/data/data';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {AuthStatus, CardTypes} from '../../helpers/constants';
import {getCitiesList} from '../../helpers/utils';

interface Props {
  favorites: Offer[];
  authStatus: string;
  onSetFavoriteStatus: (offerId: string | number, isFavorite: boolean) => void;
  onRequestFavorites: () => void;
  onCardHover: (offer: Offer) => void;
  onCardHoverLeave: () => void;
}

class Favorites extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onRequestFavorites} = this.props;
    onRequestFavorites();
  }

  render() {
    const {favorites, authStatus, onSetFavoriteStatus, onCardHover, onCardHoverLeave} = this.props;
    const cities = getCitiesList(favorites);
    const hasFavorites = favorites.length > 0;
    const isAuthorized = authStatus === AuthStatus.AUTH;

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
                          onCardHover={onCardHover}
                          onCardHoverLeave={onCardHoverLeave}
                          onSetFavoriteStatus={onSetFavoriteStatus}
                          key={offer.id}
                          isAuthorized={isAuthorized}
                          cardType={CardTypes.FAVORITES}
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
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRequestFavorites: () => {
    dispatch(DataOperation.loadFavorites());
  }
});

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
