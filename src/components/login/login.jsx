import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import withLogin from '../../hocs/with-login/with-login.jsx';

const Login = ({
  isValid,
  emailError,
  passwordError,
  onEmailChange,
  onPasswordChange,
  onSubmit
}) => {

  const ErrorMessageStyle = {
    position: `absolute`,
    top: `-20px`,
    color: `#BF616A`,
    paddingLeft: `15px`
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
              <div className="login__input-wrapper form__input-wrapper" style={{position: `relative`}}>
                {emailError ? <span style={ErrorMessageStyle}>{emailError}</span> : null}
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={onEmailChange} />
              </div>
              <div className="login__input-wrapper form__input-wrapper" style={{position: `relative`}} >
                {passwordError ? <span style={ErrorMessageStyle}>{passwordError}</span> : null}
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={onPasswordChange} />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={!isValid}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  isValid: PropTypes.bool.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withLogin(Login);

