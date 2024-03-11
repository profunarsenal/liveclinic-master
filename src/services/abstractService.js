import request from '@/axios/axios';

export default class AbstractService {
  constructor() {
    this.api = request;
  }
}