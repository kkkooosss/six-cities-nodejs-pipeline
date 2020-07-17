import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser, getAuthorizationStatus} from '../../store/reducers/user/selectors.js';
import {API_BASE} from '../../api/api.js';
import UserTypes from '../../types/user.js';
import {Link} from 'react-router-dom';

import {AuthorizationStatus} from '../../store/reducers/user/user.js';

const Header = ({user, authorizationStatus}) => {

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const authorizedUserBlock = <div className="header__nav-link header__nav-link--profile" href="#" >
    <div className="header__avatar-wrapper user__avatar-wrapper">
      <img src={`${API_BASE}${user.avatarUrl}`} style={{borderRadius: `50%`}} />
    </div>
    <span className="header__user-name user__name">
      {user.email}
    </span>
  </div>;

  const unauthorizedUserBlock = <Link to="/signin" className="header__nav-link header__nav-link--profile" href="#" >
    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
    <span className="header__user-name user__name">
      Sign In
    </span>
  </Link>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuthorized ? authorizedUserBlock : unauthorizedUserBlock}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  authorizationStatus: getAuthorizationStatus(state)
});

Header.propTypes = {
  user: UserTypes,
  authorizationStatus: PropTypes.string.isRequired
};

export default connect(mapStateToProps, null)(Header);
