import leaflet from 'leaflet';

export const Cities = {
  Amsterdam: [52.38333, 4.9],
  Dusseldorf: [51.225402, 6.776314],
  Hamburg: [53.550341, 10.000654],
  Brussels: [50.846557, 4.351697],
  Paris: [48.85661, 2.351499],
  Cologne: [50.938361, 6.959974],
};

export const MapSettings = {
  ZOOM: 12,
  ICON: leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [30, 30]
  }),
  CURRENT_OFFER_ICON: leaflet.icon({
    iconUrl: `/img/pin-active.svg`,
    iconSize: [30, 30]
  })
};

export const filters = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const ratingTitles = [
  `perfect`,
  `good`,
  `not good`,
  `badly`,
  `terribly`
];

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ApiErrorStatuses = {
  BAD_REQUEST: 400,
  NO_AUTH: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

export const ApiErrorMessages = {
  400: `Error 400. Request is not correct.`,
  401: `Error 401. Authorization required.`,
  403: `Error 403. Access is denied.`,
  404: `Error 404. Page not found.`,
  500: `Error 500. Server not responded correct. Please try again`
};

export const Routes = {
  MAIN: `/`,
  LOGIN: `/signin`,
  FAVORITES: `/favorites`,
  DETAILS: `/offer/:id`,
};

export const RequestCodes = {
  ADD: 1,
  REMOVE: 0
};

export const CardTypes = {
  CITIES: `CITIES`,
  NEAR_PLACES: `NEAR_PLACES`,
  FAVORITES: `FAVORITES`
};

export const CardClasses = {
  CITIES: `cities__place-card`,
  NEAR_PLACES: `near-places__card`,
  FAVORITES: `favorites__card`
};

export const WrapperClasses = {
  CITIES: `cities__image-wrapper`,
  NEAR_PLACES: `near-places__image-wrapper`,
  FAVORITES: `favorites__image-wrapper`
};

export const ImageSizes = {
  CITIES: {
    WIDTH: 260,
    HEIGHT: 200
  },
  NEAR_PLACES: {
    WIDTH: 260,
    HEIGHT: 200
  },
  FAVORITES: {
    WIDTH: 150,
    HEIGHT: 110
  }
};

export const Filters = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGHT: `Price: low to high`,
  PRICE_HIGHT_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const Months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];
