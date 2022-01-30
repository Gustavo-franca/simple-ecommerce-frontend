import axios, { AxiosInstance } from 'axios';
import { Configs } from '../../config';
import { CartResponse } from './types';

interface InternalClientConstructorProps {
  config: Configs;
}

class CartClient {
  private client: AxiosInstance;
  constructor({ config }: InternalClientConstructorProps) {
    this.client = axios.create({
      baseURL: config.cartAPIPath,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  async create(): Promise<CartResponse> {
    return (await this.client.post('/')).data;
  }

  async get({ id }: { id: string }) {
    return (await this.client.get(`/${id}`, {})).data;
  }

  async update(cart: CartResponse) {
    return (await this.client.put(`/`, cart)).data;
  }
}

export default CartClient;
