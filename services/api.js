import axios from 'axios';
import * as constants from 'config/constants';
import * as endpoints from 'config/endpoints';

export const api = axios.create();
api.defaults.baseURL = endpoints.BASE_URL || 'https://devfolio-io.herokuapp.com';

api.setHeader = token => {
  if (token) api.defaults.headers.common[constants.AUTH_KEY] = token;
  else delete api.defaults.headers.common[constants.AUTH_KEY];
};

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      !originalRequest?._retry &&
      typeof window !== 'undefined'
    ) {
      const { refresh } = JSON.parse(localStorage.getItem(constants.authHeaderKey));
      originalRequest._retry = true;

      return api
        .post(`${baseURL}${endpoints().auth.refresh.path}`, {
          token: refresh
        })
        .then(res => {
          if (res.status === 201) {
            const { token } = res.data.data;
            localStorage.setItem(constants.authHeaderKey, JSON.stringify(token));
            api.setHeader(token.access);
            originalRequest.headers[constants.authHeaderKey] = token.access;
            return api(originalRequest);
          }
        });
    }
    const isExpectedError =
      error?.response && error?.response?.status >= 400 && error?.response?.status < 500;
    if (!isExpectedError) {
      return Promise.reject('Something went wrong, try again later!');
    } else {
      return Promise.reject({ error: error.response.data.error });
    }
  }
);
