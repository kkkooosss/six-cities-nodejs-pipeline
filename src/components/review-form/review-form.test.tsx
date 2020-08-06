import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ReviewForm} from './review-form';

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
          onRatingChange={jest.fn()}
          onTextChange={jest.fn()}
          onSetSendingFlag={jest.fn()}
          onSubmitReview={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
