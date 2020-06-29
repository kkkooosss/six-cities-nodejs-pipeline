import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const REVIEW = {
  id: 1,
  name: `Max`,
  userPic: `img/avatar-max.jpg`,
  rating: 4,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`
};

it(`Review renders correctly`, () => {
  const tree = renderer
    .create(<Review
      review={REVIEW}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
