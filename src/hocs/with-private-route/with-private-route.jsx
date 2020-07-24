import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {AuthStatus} from "../../helpers/constants";
import {connect} from 'react-redux';
import {getAuthStatus} from "../../store/reducers/user/selectors";

const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {authStatus} = this.props;
      const isAuthorized = authStatus === AuthStatus.auth;
      if (isAuthorized) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }

  WithPrivateRoute.propTypes = {
    authStatus: PropTypes.string.isRequired
  };

  return WithPrivateRoute;
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});


export default connect(mapStateToProps, null)(withPrivateRoute);
