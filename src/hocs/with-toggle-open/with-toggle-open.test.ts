import * as React from 'react';
import renderer from 'react-test-renderer';
import withToggleOpen from './with-toggle-open';

const MockComponent = () => <div />;
const WrappedComponent = withToggleOpen(MockComponent);

it(`withToggleOpen renders correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
