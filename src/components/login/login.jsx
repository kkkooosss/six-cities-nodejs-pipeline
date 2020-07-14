import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      isValidEmail: false,
      emailError: ``,
      isValidPassword: false,
      passwordError: ``
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
  }

  _handleEmailChange(evt) {
    const email = evt.target.value;
    const emailRegEx = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    const isValidEmail = emailRegEx.test(email);

    const emailError = isValidEmail ? null : `Please enter a valid email adress`;

    this.setState({
      email,
      isValidEmail,
      emailError
    });
  }

  _handlePasswordChange(evt) {
    const password = evt.target.value;
    const isValidPassword = password.length > 3;

    const passwordError = isValidPassword ? null : `Sorry, the password is too short`;

    this.setState({
      password,
      isValidPassword,
      passwordError
    });
  }

  _handleSubmit(evt) {
    const {onLogin} = this.props;
    const {isValidEmail, isValidPassword, email, password} = this.state;

    evt.preventDefault();

    if (isValidEmail && isValidPassword) {
      onLogin({email, password});
    }
    window.history.back();
  }

  render() {
    const {isValidEmail, isValidPassword, emailError, passwordError} = this.state;
    const isValid = isValidEmail && isValidPassword;
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
              <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper" style={{position: `relative`}}>
                  {emailError ? <span style={ErrorMessageStyle}>{emailError}</span> : null}
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={this.emailRef}
                    onChange={this._handleEmailChange} />
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
                    ref={this.passwordRef}
                    onChange={this._handlePasswordChange} />
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
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
