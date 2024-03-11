import Articles from '@/services/articles';
import Applications from '@/services/applications';
import Services from '@/services/services';
import Spollers from '@/services/spollers';
import Workers from '@/services/workers';

export default class ServiceApi {
  constructor() {
    this.workers = new Workers()
    this.spollers = new Spollers()
    this.articles = new Articles()
    this.services = new Services()
    this.applications = new Applications()
  }
}