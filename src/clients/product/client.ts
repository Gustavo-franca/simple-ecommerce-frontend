import axios, { AxiosInstance } from 'axios';
import { Configs } from '../../config';
import { Product } from '../../types';
import { QueryProduct } from './types';

interface InternalClientConstructorProps {
  config: Configs;
}

class ProductClient {
  private client: AxiosInstance;
  constructor({ config }: InternalClientConstructorProps) {
    this.client = axios.create({
      baseURL: config.productAPIPath,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  async getProducts({
    ids,
    title,
    description
  }: QueryProduct): Promise<Product[]> {
    return (
      await this.client.get('/', {
        params: {
          ids: ids?.join(','),
          title,
          description
        }
      })
    ).data;
  }

  async getProduct({ id }: { id: string }) {
    return (await this.client.get(`/${id}`, {})).data;
  }
}

export default ProductClient;
