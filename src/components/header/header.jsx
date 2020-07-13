import React from 'react';
import {connect} from 'react-redux';

import {getUser} from '../../store/reducers/user/selectors.js';
import {API_BASE} from '../../api/api.js';
import UserTypes from '../../types/user.js';

const Header = ({user}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={81}
              height={41}
            />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#" >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  {user ? <img src={`${API_BASE}${user.avatarUrl}`} style={{borderRadius: `50%`}} /> : null}
                </div>
                <span className="header__user-name user__name">
                  {user ? user.email : `Sign In`}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  user: getUser(state),
});

Header.propTypes = {
  user: UserTypes
};

export default connect(mapStateToProps, null)(Header);
