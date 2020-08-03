import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import withPrivateRoute from './with-private-route';

const IS_AUTHORIZED = false;

const MockComponent = () => <div />;
const WrappedComponent = withPrivateRoute(MockComponent, IS_AUTHORIZED);

it(`withFormValidation renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <WrappedComponent isAuthorized={true} />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
