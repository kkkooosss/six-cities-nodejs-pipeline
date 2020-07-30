import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import Operation from './data.js';
import {Actions} from '../../actions/data/data.js';
import {formatOffers} from '../../../helpers/utils.js';
import rawOffers from '../../../mocks/raw-offers.js';
import {REQUEST_CODES as requestCodes} from '../../../helpers/constants.js';

const api = createAPI(() => {});

describe(`Load Offer operation works correctly`, () => {
  it(`Should make a correct API call to /hotels and get offers and cities`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, rawOffers);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: Actions.setLoadingFlag,
              payload: true});
      },
      {
        type: Actions.getOffers,
        payload: formatOffers(rawOffers)
      }
      );
  });

  it(`Should make a correct API call to /hotels/:id/nearby and get nearOffers for hotel number 1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const dataLoader = Operation.loadNearOffers(id);

    apiMock
      .onGet(`/hotels/${id}/nearby`)
      .reply(200, rawOffers);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getNearOffers,
          payload: formatOffers(rawOffers)
        });
      });
  });

  it(`Should make a correct API call to /favorite and get favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, rawOffers);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getFavorites,
          payload: formatOffers(rawOffers)
        });
      });
  });

  it(`Should make a correct API call to /favorite add set offer as favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadFavorites();
    const offerId = 1;

    apiMock
    .onGet(`/favorite`).reply(200, rawOffers)
    .onPost(`/favorite/${offerId}/${requestCodes.add}`).reply(200, {});

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getFavorites,
          payload: formatOffers(rawOffers)
        });

      });
  });

});
