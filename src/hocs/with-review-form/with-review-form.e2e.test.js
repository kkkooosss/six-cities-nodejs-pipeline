import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withReviewForm} from './with-review-form.jsx';

const MockComponent = () => <div />;
const WrappedComponent = withReviewForm(MockComponent);
configure({adapter: new Adapter()});

describe(`withReviewForm hoc e2e tests`, () => {
  const wrapper = shallow(
      <WrappedComponent
        error={false}
        sending={false}
        offerId={1}
        onSubmitReview={() => {}}
        setSendingFlag={() => {}}
      />);

  it(`Initial state set correctly`, () => {

    expect(wrapper.state(`rating`)).toBe(0);
    expect(wrapper.state(`text`)).toBe(``);
    expect(wrapper.state(`isRatingValid`)).toBe(false);
    expect(wrapper.state(`isTextValid`)).toBe(false);
  });

});
