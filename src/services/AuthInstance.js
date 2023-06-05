import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy',
});

const searchIdInterceptor = (config) => {
  config.params = {
    ...config.params,
    searchId: localStorage.getItem('searchId') || null,
  };

  return config;
};
instance.interceptors.request.use(searchIdInterceptor);

export { instance };
