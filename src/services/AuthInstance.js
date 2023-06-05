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
// instance.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 500 && error.config && !error.config._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//         return instance.request(originalRequest);
//       } catch (e) {
//         console.log('error');
//       }
//     }
//     throw error;
//   }
// );

export { instance };
