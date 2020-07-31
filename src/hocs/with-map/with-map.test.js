import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import withMap from './with-map.jsx';
import mockStore from '../../mocks/mock-store.js';
import mockOffers from '../../mocks/offers.js';

const MockComponent = ({mapRef}) => <div ref={mapRef}/>;
const WrappedComponent = withMap(MockComponent);

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <WrappedComponent offers={mockOffers} />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  mapRef: PropTypes.object.isRequired
};
