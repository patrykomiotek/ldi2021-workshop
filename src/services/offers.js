import { prepareUri } from './helpers';
import apiConfig from './config';
import axiosInstance from './index';

export const fetchOffers = () => {
  return axiosInstance.get(apiConfig.offerList);
};

export const fetchOffer = (offerId) => {
  return axiosInstance.get(prepareUri(apiConfig.userDetails, { id: offerId }));
};
