import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import withReviewForm from './with-review-form.jsx';
import mockStore from '../../mocks/mock-store.js';

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
const RATING = 5;
const OFFER_ID = 1;

const MockComponent = ({formRef, textRef, submitRef}) => (
  <div>
    <form ref={formRef}>
      <textarea ref={textRef} />
      <button ref={submitRef} />
    </form>
  </div>
);

const WrappedComponent = withReviewForm(MockComponent);

it(`withReviewForm renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <WrappedComponent
            offerId={OFFER_ID}
            rating={RATING}
            isRatingValid={true}
            text={TEXT}
            isTextValid={true}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  formRef: PropTypes.object.isRequired,
  textRef: PropTypes.object.isRequired,
  submitRef: PropTypes.object.isRequired,
};
