import axios from 'axios';
import {ApiErrorStatuses} from '../helpers/constants';

export const API_BASE = `https://4.react.pages.academy/six-cities`;

const createAPI = (onUnathorized, onError) => {
  const api = axios.create({
    baseURL: API_BASE,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    const {NO_AUTH, FORBIDDEN, NOT_FOUND, INTERNAL_SERVER_ERROR, BAD_REQUEST} = ApiErrorStatuses;

    if (response.status === NO_AUTH) {
      onUnathorized();
    } else if (response.status === FORBIDDEN || NOT_FOUND || INTERNAL_SERVER_ERROR || BAD_REQUEST) {
      onError(response.status);
      throw err;
    }

    if (response.status !== NO_AUTH) {
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
