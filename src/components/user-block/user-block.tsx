import * as React from 'react';
import PropTypes from 'prop-types';
import UserTypes from '../../types/user';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {API_BASE} from '../../api/api';
import {AUTH_STATUS, ROUTES} from '../../helpers/constants';
import {getUser, getAuthStatus} from '../../store/reducers/user/selectors';


const UserBlock = ({authStatus, user}) => {
  const isAuthorized = authStatus === AUTH_STATUS.auth;

  return (
    <Link to={ROUTES.favorites} className="header__nav-link header__nav-link--profile" href="#" >
      <div className="header__avatar-wrapper user__avatar-wrapper">
        {isAuthorized ? <img src={`${API_BASE}${user.avatarUrl}`} style={{borderRadius: `50%`}} /> : null}
      </div>
      <span className="header__user-name user__name">
        {isAuthorized ? user.email : `Sign In`}
      </span>
    </Link>
  );

};

const mapStateToPros = (state) => ({
  user: getUser(state),
  authStatus: getAuthStatus(state)
});

export default connect(mapStateToPros, null)(UserBlock);

UserBlock.propTypes = {
  user: UserTypes,
  authStatus: PropTypes.string.isRequired
};
