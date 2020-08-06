import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import withLogin from './with-login';

const MockComponent = () => <div />;
const WrappedComponent = withLogin(MockComponent);
const onLogin = jest.fn();
configure({adapter: new Adapter()});

describe(`withLogin hoc e2e tests`, () => {
  const wrapper = shallow(<WrappedComponent onLogin={onLogin} />);

  it(`Should pass given value to email`, () => {
    const event = {
      target: {
        value: `mail@email.com`
      }
    };
    wrapper.instance()._handleEmailChange(event);
    expect(wrapper.state().email).toEqual(`mail@email.com`);
  });

  it(`Should pass given value to password`, () => {
    const event = {
      target: {
        value: `1234`
      }
    };
    wrapper.instance()._handlePasswordChange(event);
    expect(wrapper.state().password).toEqual(`1234`);
  });

  it(`Valid email should change isValidEmail to true`, () => {
    const event = {
      target: {
        value: `mail@email.com`
      }
    };
    wrapper.instance()._handleEmailChange(event);
    expect(wrapper.state().isValidEmail).toEqual(true);
  });

  it(`Invalid email should change isValidEmail to false`, () => {
    const event = {
      target: {
        value: `lalala`
      }
    };
    wrapper.instance()._handleEmailChange(event);
    expect(wrapper.state().isValidEmail).toEqual(false);
  });

  it(`Valid password should change isValidPassword to true`, () => {
    const event = {
      target: {
        value: `1234`
      }
    };
    wrapper.instance()._handlePasswordChange(event);
    expect(wrapper.state().isValidPassword).toEqual(true);
  });

  it(`Invalid password should change isValidPassword to false`, () => {
    const event = {
      target: {
        value: `123`
      }
    };
    wrapper.instance()._handlePasswordChange(event);
    expect(wrapper.state().isValidPassword).toEqual(false);
  });

  it(`If password is valid, passwordError field should have a null entry`, () => {
    const event = {
      target: {
        value: `1234`
      }
    };
    wrapper.instance()._handlePasswordChange(event);
    expect(wrapper.state().passwordError).toEqual(null);
  });

  it(`If password is not valid, passwordError field should contain correct error messege`, () => {
    const event = {
      target: {
        value: `123`
      }
    };
    wrapper.instance()._handlePasswordChange(event);
    expect(wrapper.state().passwordError).toEqual(`Sorry, the password is too short`);
  });

  it(`If email is valid, emailError field should have a null entry`, () => {
    const event = {
      target: {
        value: `mail@email.com`
      }
    };
    wrapper.instance()._handleEmailChange(event);
    expect(wrapper.state().emailError).toEqual(null);
  });

  it(`If email is not valid, emailError field should contain correct error messege`, () => {
    const event = {
      target: {
        value: `lalala`
      }
    };
    wrapper.instance()._handleEmailChange(event);
    expect(wrapper.state().emailError).toEqual(`Please enter a valid email adress`);
  });

  it(`If email and password are correct, should call onLogin function from props`, () => {
    const email = `mail@email.com`;
    const password = `1234`;
    const emailEvent = {
      target: {
        value: email
      }
    };
    const passwordEvent = {
      target: {
        value: password
      }
    };

    wrapper.instance()._handleEmailChange(emailEvent);
    wrapper.instance()._handleEmailChange(passwordEvent);
    wrapper.props().onLogin({email, password});
    expect(onLogin).toHaveBeenCalledTimes(1);
    expect(onLogin).toHaveBeenNthCalledWith(1, {email, password});
  });

});
