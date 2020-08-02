import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import withPrivateRoute from './with-private-route.jsx';

const MockComponent = () => <div />;
const WrappedComponent = withPrivateRoute(MockComponent);

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
