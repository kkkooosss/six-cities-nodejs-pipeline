import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form.jsx';

const errorStyle = {color: `#BF616A`, paddingBottom: `5px`};

it(`ReviewForm renders correctly`, () => {

  const tree = renderer
    .create(
        <ReviewForm
          onSubmit={() => {}}
          onRatingChange={() => {}}
          onTextChange={() => {}}
          errorStyle={errorStyle}
          textRef={React.createRef()}
          submitRef={React.createRef()}
          formRef={React.createRef()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
