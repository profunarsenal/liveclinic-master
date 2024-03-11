import AbstractService from '@/services/abstractService';

export default class Articles extends AbstractService {
  async getArticles() {
    const { data } = await this.api.get('/articles.json');
    return data;
  }
}