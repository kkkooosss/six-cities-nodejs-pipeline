import React from 'react';
import {Link} from 'react-router-dom';

import UserBlock from '../user-block/user-block.jsx';

const Header = () => (
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
              <UserBlock />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
