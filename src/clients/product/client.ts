import axios, { Axios } from 'axios';
import { Configs } from '../../config';
import { Product } from '../../types';
import { QueryProduct } from './types';

interface InternalClientConstructorProps {
  config: Configs;
}

class ProductClient {
  private client: Axios;
  constructor({ config }: InternalClientConstructorProps) {
    this.client = axios.create({
      baseURL: config.internalAPI + config.productAPIPath
    });
  }

  getProducts(params: QueryProduct): Promise<Product[]> {
    return this.client.get('/', {
      params
    });
  }
}

export default ProductClient;
