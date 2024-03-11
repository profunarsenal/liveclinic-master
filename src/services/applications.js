import AbstractService from '@/services/abstractService';

export default class Applications extends AbstractService {
  async sendApplication(form) {
    await this.api.post('/applications.json', form);
  }
}