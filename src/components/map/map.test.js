import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

const MAP_REF = React.createRef();

it(`Map renders correctly`, () => {
  const tree = renderer
    .create(
        <Map
          mapRef={MAP_REF}
          isPropertyMap={false}
        />, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
