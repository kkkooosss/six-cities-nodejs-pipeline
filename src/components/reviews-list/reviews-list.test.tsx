import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import ReviewsList from './reviews-list';
import mockStore from '../../test-data/mock-store';
import Review from '../../interfaces/review';
import mockReviews from '../../test-data/reviews';

const REVIEWS: Review[] = mockReviews;

it(`ReviewsList renders correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <ReviewsList
          offerId={1}
          isAuthorized={true}
          reviews={REVIEWS}
        />
      </Provider>, {
        createNodeMock: () => document.createElement(`div`)
      })
.toJSON();
  expect(tree).toMatchSnapshot();
});
