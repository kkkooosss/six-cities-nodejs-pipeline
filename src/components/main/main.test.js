import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Main from './main.jsx';
import {BrowserRouter} from 'react-router-dom';
import mockStore from '../../mocks/mock-store.js';


it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
