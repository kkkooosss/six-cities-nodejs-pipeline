import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import withLogin from './with-login.jsx';
import mockStore from '../../mocks/mock-store.js';

const MockComponent = () => <div />;
const WrappedComponent = withLogin(MockComponent);

it(`withLogin renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <WrappedComponent onLogin={() => {}}/>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
