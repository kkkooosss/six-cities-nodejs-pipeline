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
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
  currentOfferIcon: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  })
};

export const FILTERS = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];
