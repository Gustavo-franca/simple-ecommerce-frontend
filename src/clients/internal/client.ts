import axios, { Axios } from 'axios';
import { Configs } from '../../config';

interface InternalClientConstructorProps {
  config: Configs;
}

class InternalClient {
  private client: Axios;
  constructor({ config }: InternalClientConstructorProps) {
    this.client = axios.create({
      baseURL: config.internalAPI
    });
  }

}

export default InternalClient;
