import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const OFFER_TITLE = `Beautiful &amp; luxurious apartment at great location`;

Enzyme.configure({adapter: new Adapter()});

describe(`e2e in OfferCard`, () => {

  it(`click on the title works correctly`, () => {
    const clickHandler = jest.fn();

    const tree = shallow(<OfferCard
      offerTitle={OFFER_TITLE}
      handleClick={clickHandler}
    />);

    const title = tree.find(`.place-card__name`);
    title.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
