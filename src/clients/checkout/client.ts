import axios, { AxiosInstance } from 'axios';
import { Configs } from '../../config';
import { FinishCheckout } from './types';

interface InternalClientConstructorProps {
  config: Configs;
}

class CheckoutClient {
  private client: AxiosInstance;
  constructor({ config }: InternalClientConstructorProps) {
    this.client = axios.create({
      baseURL: config.checkoutAPIPath,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  async finish({ products }: FinishCheckout): Promise<void> {
    await this.client.post('/purchase/order/', {
      params: {
        products
      }
    });
  }
}

export default CheckoutClient;
