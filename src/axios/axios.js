import axios from 'axios';
import i18n from '@/i18n';

const lang = i18n.global.locale;

const request = axios.create({
  baseURL: `https://liveclinic63-default-rtdb.firebaseio.com/${lang}`
});

request.interceptors.response.use(null, error => {
  return Promise.reject(error);
});

export default request;