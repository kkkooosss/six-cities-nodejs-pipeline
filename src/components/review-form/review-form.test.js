import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form.jsx';
const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.`;

it(`ReviewForm renders correctly`, () => {

  const tree = renderer
    .create(
        <ReviewForm
          offerId={1}
          sending={false}
          error={false}
          rating={4}
          isRatingValid={true}
          text={TEXT}
          isTextValid={true}
          onRatingChange={() => {}}
          onTextChange={() => {}}
          onSetSendingFlag={() => {}}
          onSubmitReview={() => {}}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
