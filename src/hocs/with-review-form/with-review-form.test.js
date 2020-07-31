import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import withReviewForm from './with-review-form.jsx';
import mockStore from '../../mocks/mock-store.js';

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
          <WrappedComponent offerId={1} />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  formRef: PropTypes.object.isRequired,
  textRef: PropTypes.object.isRequired,
  submitRef: PropTypes.object.isRequired
};
