import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import Operation from './data.js';
import {Actions} from '../../actions/data/data.js';

const api = createAPI(() => {});

describe(`Load Offer operation works correctly`, () => {
  it(`Should make a correct API call to /hotels and get cities`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const citiesLoader = Operation.loadCities();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return citiesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getCities,
          payload: [{fake: true}],
        });
      });
  });
});
