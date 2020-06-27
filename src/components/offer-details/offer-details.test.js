import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details.jsx';

const OFFER = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  isPremium: true,
  price: 120,
  coordinates: [52.3909553943508, 4.85309666406198],
  img: `img/apartment-01.jpg`,
  photos: [`img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`],
  rating: 4.8,
  bedrooms: 3,
  capacity: 4,
  host: {
    id: 1,
    isPro: true,
    name: `Angelina`,
    userPic: `img/avatar-angelina.jpg`
  },
  amenities: [`Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`]
};

const REVIEWS = [
  {
    id: 1,
    name: `Max`,
    userPic: `img/avatar-max.jpg`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  },
  {
    id: 2,
    name: `Angelina`,
    userPic: `img/avatar-angelina.jpg`,
    rating: 5,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `2019-05-14`
  }
];

it(`OfferDetails renders correctly`, () => {
  const tree = renderer
    .create(<OfferDetails
      offer={OFFER}
      reviews={REVIEWS}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
