import {
  AddProductPayload,
  CartModalAction,
  CartModalContextState,
  CartModalPayload,
  CartProduct,
  ChangeQuantityProductPayload,
  RemoveProductPayload
} from './types';

export const openModal = (
  state: CartModalContextState
): CartModalContextState => ({
  ...state,
  open: true
});

export const closeModal = (
  state: CartModalContextState
): CartModalContextState => ({
  ...state,
  open: false
});

export const removeProduct = (
  state: CartModalContextState,
  { id }: RemoveProductPayload
): CartModalContextState => ({
  ...state,
  products: state.products.filter((product) => product.id !== id)
});

export const addProduct = ({
  state,
  payload: { product, quantity }
}: {
  state: CartModalContextState;
  payload: AddProductPayload;
}): CartModalContextState => {
  if (quantity === 0) return state;

  const cartProduct: CartProduct = {
    ...product,
    quantity
  };

  const sameCartProduct = state.products.find((p) => p.id === cartProduct.id);

  if (sameCartProduct) {
    cartProduct.quantity += sameCartProduct.quantity;
  }

  const filteredProduct = state.products.filter((p) => p.id !== cartProduct.id);

  return {
    ...state,
    products: [...filteredProduct, cartProduct]
  };
};

export const changeQuantityProduct = ({
  state,
  payload: { id, newQuantity }
}: {
  state: CartModalContextState;
  payload: ChangeQuantityProductPayload;
}): CartModalContextState => {
  if (newQuantity === 0) return state;

  const sameCartProduct = state.products.find((p) => p.id === id);

  if (!sameCartProduct) return state;

  sameCartProduct.quantity = newQuantity;

  const filteredProduct = state.products.filter((p) => p.id !== id);

  return {
    ...state,
    products: [...filteredProduct, sameCartProduct]
  };
};

export const setCart = ({
  state,
  payload
}: {
  state: CartModalContextState;
  payload: Partial<CartModalContextState>;
}): CartModalContextState => {
  return {
    ...state,
    ...payload
  };
};
