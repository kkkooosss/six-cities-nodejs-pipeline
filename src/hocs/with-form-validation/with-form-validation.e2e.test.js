import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withFormValidation from './with-form-validation.jsx';

const MockComponent = () => <div />;
const WrappedComponent = withFormValidation(MockComponent);
configure({adapter: new Adapter()});

describe(`withFormValidation hoc e2e tests`, () => {
  const wrapper = mount(
      <WrappedComponent />);

  it(`Initial state set correctly`, () => {

    expect(wrapper.state(`rating`)).toBe(0);
    expect(wrapper.state(`text`)).toBe(``);
    expect(wrapper.state(`isRatingValid`)).toBe(false);
    expect(wrapper.state(`isTextValid`)).toBe(false);
  });

  it(`Valid review text should change isTextValid to true`, () => {
    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

    wrapper.setState({text});
    expect(wrapper.state().isTextValid).toEqual(true);
  });

  it(`Invalid review text should change isTextValid to false`, () => {
    const text = `lalala.`;

    wrapper.setState({text});
    expect(wrapper.state().isTextValid).toEqual(false);
  });

  it(`Valid rating should change isRatingValid to true`, () => {

    wrapper.setState({rating: 5});
    expect(wrapper.state().isRatingValid).toEqual(true);
  });

  it(`Invalid rating should change isRatingValid to false`, () => {

    wrapper.setState({rating: 0});
    expect(wrapper.state().isTextValid).toEqual(false);
  });

});
