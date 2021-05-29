import getConfig from 'next/config';

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

const baseURL = API_URL;
const prefix = `${baseURL}/api/v1`;

const apiConfig = {
  auth: `${prefix}/auth/token/`,
  authTokenRefresh: `${prefix}/auth/token/refresh/`,
  authTokenVerify: `${prefix}/auth/token/verify/`,

  offerList: `${prefix}/offers/`,
  offerDetails: `${prefix}/offers/{id}/`,
  offerSearch: `${prefix}/offers/search/`,

  userList: `${prefix}/users/`,
  userDetails: `${prefix}/users/{id}/`,
};

export default apiConfig;
