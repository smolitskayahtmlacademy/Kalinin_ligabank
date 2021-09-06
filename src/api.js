import axios from 'axios';

const BACKEND_URL = 'https://openexchangerates.org/api';
const REQUEST_TIMEOUT = 5000;
const APP_ID = 'bf1282d432cf450c81732cef00acd2c3';

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      Authorization: `Token ${APP_ID}`,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export { createAPI };
