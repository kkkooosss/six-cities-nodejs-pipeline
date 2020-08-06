import * as React from 'react';

import Header from '../header/header';
import withLogin from '../../hocs/with-login/with-login';
import Loader from '../loader/loader';

interface Props {
  isValid: boolean;
  loading: boolean;
  emailError: string;
  passwordError: string;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onSubmit: () => void;
}

const Login = (props: Props) => {
  const {isValid, emailError, passwordError, onEmailChange, onPasswordChange, onSubmit, loading} = props;

  return loading ? <Loader /> : (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                {emailError ? <span className="login__error-message">{emailError}</span> : null}
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={onEmailChange} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                {passwordError ? <span className="login__error-message">{passwordError}</span> : null}
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

export default withLogin(Login);
