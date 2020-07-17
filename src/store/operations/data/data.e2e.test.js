import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import Operation from './data.js';
import {Actions} from '../../actions/data/data.js';
import {formatOffers} from '../../../helpers/helpers.js';
import rawOffers from '../../../mocks/raw-offers.js';

const api = createAPI(() => {});

describe(`Load Offer operation works correctly`, () => {
  it(`Should make a correct API call to /hotels and get offers and cities`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, rawOffers);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getOffers,
          payload: formatOffers(rawOffers)
        });
      });
  });
});
