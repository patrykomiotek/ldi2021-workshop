import getConfig from 'next/config';

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

const baseURL = API_URL;
const prefix = `${baseURL}/api/v1`;

// https://foo.com/api/v1/offers/
// https://foo.com/api/v1/offers/{id}/

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
