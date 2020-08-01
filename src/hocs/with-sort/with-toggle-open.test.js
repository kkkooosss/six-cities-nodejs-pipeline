import React from 'react';
import renderer from 'react-test-renderer';
import withToggleOpen from './with-toggle-open.jsx';

const MockComponent = () => <div />;
const WrappedComponent = withToggleOpen(MockComponent);

it(`withSort renders correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
