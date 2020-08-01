import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import withMap from './with-map.jsx';
import mockStore from '../../test-data/mock-store.js';
import mockOffers from '../../test-data/offers.js';

const MockComponent = ({mapRef}) => <div ref={mapRef}/>;
const WrappedComponent = withMap(MockComponent);

it(`withMap renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <WrappedComponent
            offers={mockOffers}
            isPropertyMap={false}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  mapRef: PropTypes.object.isRequired
};
