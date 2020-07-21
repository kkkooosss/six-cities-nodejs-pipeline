import React from 'react';
import PropTypes from 'prop-types';
import UserTypes from '../../types/user';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {API_BASE} from '../../api/api.js';
import {AuthorizationStatus} from '../../store/reducers/user/user.js';
import {getUser, getAuthorizationStatus} from '../../store/reducers/user/selectors.js';


const UserBlock = ({authorizationStatus, user}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <Link to={isAuthorized ? `/` : `/signin`} className="header__nav-link header__nav-link--profile" href="#" >
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
  authorizationStatus: getAuthorizationStatus(state)
});

export default connect(mapStateToPros, null)(UserBlock);

UserBlock.propTypes = {
  user: UserTypes,
  authorizationStatus: PropTypes.string.isRequired
};
