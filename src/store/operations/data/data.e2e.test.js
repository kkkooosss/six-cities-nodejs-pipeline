import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api';
import Operation from './data';
import {Actions} from '../../actions/data/data';
import {formatOffers} from '../../../helpers/utils';
import rawOffers from '../../../test-data/raw-offers';
import {REQUEST_CODES} from '../../../helpers/constants';

const api = createAPI(jest.fn());

describe(`Load Offer operation works correctly`, () => {
  it(`Should make a correct API call to /hotels and get offers and cities`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, rawOffers);

    return dataLoader(dispatch, jest.fn(), api)
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

    return dataLoader(dispatch, jest.fn(), api)
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

    return dataLoader(dispatch, jest.fn(), api)
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
    .onPost(`/favorite/${offerId}/${REQUEST_CODES.add}`).reply(200, {});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.getFavorites,
          payload: formatOffers(rawOffers)
        });

      });
  });

});
