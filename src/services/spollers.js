import AbstractService from '@/services/abstractService';

export default class Spollers extends AbstractService {
  async getSpollers() {
    const { data } = await this.api.get('/spollers.json');
    return data;
  }
}