import axios from 'axios';

export const API_BASE = `https://4.react.pages.academy/six-cities`;

const Error = {
  UNAUTHORIZED: 401,
};

const createAPI = (onUnathorized) => {
  const api = axios.create({
    baseURL: API_BASE,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnathorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
