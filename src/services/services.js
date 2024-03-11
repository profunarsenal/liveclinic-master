import AbstractService from '@/services/abstractService';

export default class Services extends AbstractService {
  async getServices() {
    const { data } = await this.api.get('/services.json');
    return data;
  }
}