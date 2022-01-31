import { CartProduct, DispatchFunctionProps } from './types';
import { Product } from '../../types';
import CartClient from '../../clients/cart';
import { Configs } from '../../config';
import ProductClient from '../../clients/product';

const cartKey = 'simple-ecommerce-cart';

export const addProductInCart =
  ({
    product,
    quantity,
    config
  }: {
    product: Product;
    quantity: number;
    config: Configs;
  }) =>
  async ({ dispatch, state }: DispatchFunctionProps) => {
    const cartClient = new CartClient({ config });

    if (!state.id) return;

    if (quantity === 0) return;

    const cartProduct: CartProduct = {
      ...product,
      quantity
    };

    const sameCartProduct = state.products.find((p) => p.id === cartProduct.id);

    if (sameCartProduct) {
      cartProduct.quantity += sameCartProduct.quantity;
    }

    const filteredProduct = state.products.filter(
      (p) => p.id !== cartProduct.id
    );

    const newCartProducts = [...filteredProduct, cartProduct];

    await cartClient.update({
      id: state.id,
      products: newCartProducts.map(({ id, quantity }) => ({ id, quantity }))
    });

    dispatch({
      type: 'SET_CART',
      payload: {
        products: newCartProducts
      }
    });
  };

export const removeProductInCart =
  ({ id, config }: { id: string; config: Configs }) =>
  async ({ dispatch, state }: DispatchFunctionProps) => {
    if (!state.id) return;

    const cartClient = new CartClient({ config });

    const newCartProducts = state.products.filter(
      (product) => product.id !== id
    );

    await cartClient.update({
      id: state.id,
      products: newCartProducts.map(({ id, quantity }) => ({ id, quantity }))
    });

    dispatch({
      type: 'SET_CART',
      payload: {
        products: newCartProducts
      }
    });
  };

export const changeQuantityProductInCart =
  ({
    id,
    newQuantity,
    config
  }: {
    id: string;
    newQuantity: number;
    config: Configs;
  }) =>
  async ({ dispatch, state }: DispatchFunctionProps) => {
    if (!state.id) return;

    const cartClient = new CartClient({ config });

    if (newQuantity === 0) return;

    const sameCartProduct = state.products.find((p) => p.id === id);

    if (!sameCartProduct) return;

    sameCartProduct.quantity = newQuantity;

    const filteredProduct = state.products.filter((p) => p.id !== id);

    const newCartProducts = [...filteredProduct, sameCartProduct];

    await cartClient.update({
      id: state.id,
      products: newCartProducts.map(({ id, quantity }) => ({ id, quantity }))
    });

    dispatch({
      type: 'SET_CART',
      payload: {
        products: newCartProducts
      }
    });
  };

export const createCart =
  ({ config }: { config: Configs }) =>
  async ({ dispatch }: DispatchFunctionProps) => {
    const cartClient = new CartClient({ config });
    const productAPI = new ProductClient({ config });
    const payload = window.localStorage.getItem(cartKey);
    if (payload) {
      const { id } = JSON.parse(payload) as { id: string };

      const { id: idCart, products } = (await cartClient.get({ id })) ?? {
        id: '',
        products: []
      };

      if (id) {
        const decoratedCartProducts = products.map(async ({ id, quantity }) => {
          const product = await productAPI.getProduct({ id: id });
          return {
            ...product,
            id,
            quantity
          };
        });

        return dispatch({
          type: 'SET_CART',
          payload: {
            id: idCart,
            products: await Promise.all(decoratedCartProducts)
          }
        });
      }
      window.localStorage.removeItem(cartKey);
    }

    const cart = await cartClient.create();

    window.localStorage.setItem(cartKey, JSON.stringify({ id: cart.id }));

    return dispatch({
      type: 'SET_CART',
      payload: cart
    });
  };
