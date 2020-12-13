import Axios from 'axios';
import {url, apiKey} from '../Constants';

class Api {
  constructor(baseURL, config = {}) {
    config.baseURL = config.baseURL || baseURL;
    config.params = {apiKey};
    this.client = Axios.create(config);
  }

  get(path, params = {}) {
    return this.client.get(`${url}/${path}`, {params});
  }

  getChannels() {
    return this.get('sources');
  }
}

const api = new Api(url);

export default () => api;
