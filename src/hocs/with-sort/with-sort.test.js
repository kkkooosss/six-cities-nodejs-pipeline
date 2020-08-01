import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import withSort from './with-sort.jsx';
import mockStore from '../../test-data/mock-store.js';

const MockComponent = () => <div />;
const WrappedComponent = withSort(MockComponent);

it(`withSort renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <WrappedComponent />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
