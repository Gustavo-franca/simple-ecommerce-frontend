import { DispatchFunctionProps } from './types';
import { Configs } from '../../config';
import ProductClient from '../../clients/product';

export const searchProducts =
  ({ config, search }: { config: Configs; search: string }) =>
  async ({ dispatch }: DispatchFunctionProps) => {
    const productClient = new ProductClient({ config });

    const products = await productClient.getProducts({
      title: search,
      description: search
    });

    dispatch({ type: 'SET_PRODUCTS', payload: products });
  };
