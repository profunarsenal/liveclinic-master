import AbstractService from '@/services/abstractService';

export default class Workers extends AbstractService {
  async getWorkers() {
    const { data } = await this.api.get('/workers.json');
    return data;
  }
}