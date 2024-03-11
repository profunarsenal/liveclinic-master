import ServiceApi from '@/services/serviceApi';

export default {
  install: (app) => {
    app.config.globalProperties.$service = new ServiceApi();
  }
}