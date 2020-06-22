import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const offer = {
  id: 2,
  title: `Canal View Prinsengracht`,
  type: `Apartment`,
  isPremium: false,
  price: 132,
  img: `img/apartment-02.jpg`,
};

Enzyme.configure({adapter: new Adapter()});

describe(`e2e in OfferCard`, () => {

  it(`click on the title works correctly`, () => {
    const clickHandler = jest.fn();

    const tree = shallow(<OfferCard
      offer={offer}
      onTitleClick={clickHandler}
    />);

    const title = tree.find(`.place-card__name`);
    title.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`hover on the card works correctly`, () => {
    const hoverHandler = jest.fn();

    const tree = shallow(<OfferCard
      offer={offer}
      onCardHover={hoverHandler}
    />);

    tree.simulate(`mouseover`);

    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });
});
