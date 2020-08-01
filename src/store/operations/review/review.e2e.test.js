import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import Operation from './review.js';
import {Actions} from '../../actions/review/review.js';
import {formatReviews} from '../../../helpers/utils.js';
import rawReviews from '../../../test-data/raw-reviews.js';

const api = createAPI(() => {});

describe(`Review operation works correctly`, () => {
  it(`Should make a correct API call to /comments with id = 1 and get reviews`, () => {
    const offerId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/${offerId}`)
      .reply(200, rawReviews);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getReviews,
          payload: formatReviews(rawReviews)
        });
      });
  });

  it(`Should make a correct API call to /comments with id = 1, post a review and load reviews`, () => {
    const offerId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const rating = 5;
    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

    const dataLoader = Operation.submitReview(1, {rating, text});

    apiMock
      .onGet(`/comments/${offerId}`).reply(200, rawReviews)
      .onPost(`/comments/${offerId}`).reply(200, rawReviews);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getReviews,
          payload: formatReviews(rawReviews)
        });
      });
  });

});
