import axios from 'axios';

const baseHeaders = {
  'Content-type': 'application/json',
};

export const setToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const axiosInstance = axios.create({
  headers: baseHeaders,
  responseType: 'json',
});

const interceptors = {
  request: async (config) => {
    return config;
  },
  response: (response) => {
    return response;
  },
  error: async (error) => {
    return Promise.reject(error);
  },
};

axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);

export default axiosInstance;
