import * as React from "react";
import {Redirect} from "react-router-dom";
import {ROUTES as routes} from '../../helpers/constants.js';

const withPrivateRoute = (Component, isAuthorized) => {
  type P = React.ComponentProps<typeof Component>;

  class WithPrivateRoute extends React.PureComponent<P> {
    constructor(props) {
      super(props);
    }

    render() {
      if (isAuthorized) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to={routes.login} />;
      }
    }
  }

  return WithPrivateRoute;
};

export default withPrivateRoute;
