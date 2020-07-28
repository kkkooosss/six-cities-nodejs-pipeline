import leaflet from 'leaflet';

export const CITIES = {
  Amsterdam: [52.38333, 4.9],
  Dusseldorf: [51.225402, 6.776314],
  Hamburg: [53.550341, 10.000654],
  Brussels: [50.846557, 4.351697],
  Paris: [48.85661, 2.351499],
  Cologne: [50.938361, 6.959974],
};

export const MAP_SETTINGS = {
  zoom: 12,
  icon: leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [30, 30]
  }),
  currentOfferIcon: leaflet.icon({
    iconUrl: `/img/pin-active.svg`,
    iconSize: [30, 30]
  })
};

export const FILTERS = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const RATING_TITLES = [
  `perfect`,
  `good`,
  `not good`,
  `badly`,
  `terribly`
];

export const AuthStatus = {
  auth: `AUTH`,
  noAuth: `NO_AUTH`,
};

export const ROUTES = {
  main: `/`,
  login: `/signin`,
  favorites: `/favorites`,
  details: `/offer/:id`,
};

export const REQUEST_CODES = {
  add: 1,
  remove: 0
};

export const CARD_TYPES = {
  cities: `cities`,
  nearPlaces: `nearPlaces`,
  favorites: `favorites`
};

export const CARD_CLASSES = {
  cities: `cities__place-card`,
  nearPlaces: `near-places__card`,
  favorites: `favorites__card`
};

export const WRAPPER_CLASSES = {
  cities: `cities__image-wrapper`,
  nearPlaces: `near-places__image-wrapper`,
  favorites: `favorites__image-wrapper`
};

export const IMAGE_SIZES = {
  cities: {
    width: 260,
    height: 200
  },
  nearPlaces: {
    width: 260,
    height: 200
  },
  favorites: {
    width: 150,
    height: 110
  }
};
