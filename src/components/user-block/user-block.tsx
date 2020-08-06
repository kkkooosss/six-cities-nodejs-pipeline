import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {API_BASE} from '../../api/api';
import {AuthStatus, Routes} from '../../helpers/constants';
import {getUser, getAuthStatus} from '../../store/reducers/user/selectors';
import User from '../../interfaces/user';

interface Props {
  user: User;
  authStatus: string;
}

const UserBlock = (props: Props) => {
  const {authStatus, user} = props;
  const isAuthorized = authStatus === AuthStatus.AUTH;

  return (
    <Link to={Routes.FAVORITES} className="header__nav-link header__nav-link--profile" href="#" >
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
