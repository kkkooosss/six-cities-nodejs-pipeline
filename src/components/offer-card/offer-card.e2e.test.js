import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const OFFER = {
  id: 1,
  title: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`,
  isPremium: true,
  price: 120,
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

Enzyme.configure({adapter: new Adapter()});

describe(`e2e in OfferCard`, () => {

  it(`click on the title works correctly`, () => {
    const clickHandler = jest.fn();

    const tree = shallow(<OfferCard
      offer={OFFER}
      onTitleClick={clickHandler}
    />);

    const title = tree.find(`.place-card__name`);
    title.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`hover on the card works correctly`, () => {
    const hoverHandler = jest.fn();

    const tree = shallow(<OfferCard
      offer={OFFER}
      onCardHover={hoverHandler}
    />);

    tree.simulate(`mouseover`);

    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });
});
