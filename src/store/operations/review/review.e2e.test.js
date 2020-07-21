import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import Operation from './review.js';
import {Actions} from '../../actions/review/review.js';
import {formatReviews} from '../../../helpers/utils.js';
import rawReviews from '../../../mocks/raw-reviews.js';

const api = createAPI(() => {});

describe(`Review operation works correctly`, () => {
  it(`Should make a correct API call to /comments with id = 1 and get reviews`, function () {
    const id = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/${id}`)
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

});
