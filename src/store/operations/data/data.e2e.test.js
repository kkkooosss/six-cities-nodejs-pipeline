import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api';
import Operation from './data';
import {ActionTypes} from '../../actions/data/data';
import {formatOffers} from '../../../helpers/utils';
import rawOffers from '../../../test-data/raw-offers';
import {RequestCodes} from '../../../helpers/constants';

const api = createAPI(jest.fn());

describe(`Load Offer operation works correctly`, () => {
  it(`Should make a correct API call to /hotels and get offers and cities`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, rawOffers);

    const MOCK_CITIES = {
      DATA: {
        cities: [`Amsterdam`, `Brusseles`]
      }
    };

    const getState = () => MOCK_CITIES;

    return dataLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionTypes.SET_LOADING_FLAG,
              payload: true});
      },
      {
        type: ActionTypes.GET_OFFERS,
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
          type: ActionTypes.GET_NEAR_OFFERS,
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
          type: ActionTypes.GET_FAVORITES,
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
    .onPost(`/favorite/${offerId}/${RequestCodes.ADD}`).reply(200, {});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.GET_FAVORITES,
          payload: formatOffers(rawOffers)
        });

      });
  });

});
