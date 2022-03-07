import { Configs } from '../../config';
import { CheckoutProduct } from './types';
import CheckoutClient from '../../clients/checkout';

export const finishCheckout =
  ({ config, products }: { config: Configs; products: CheckoutProduct[] }) =>
  async () => {
    const checkoutClient = new CheckoutClient({ config });
    console.log(products);
    await checkoutClient.finish({
      products
    });
  };
