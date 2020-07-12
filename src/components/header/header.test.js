import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(<Header isAuthorized={false} user={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
