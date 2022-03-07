import {
  AddProductPayload,
  CheckoutContextState,
  CheckoutProduct,
  ChangeQuantityProductPayload,
  RemoveProductPayload
} from './types';

export const removeProduct = (
  state: CheckoutContextState,
  { id }: RemoveProductPayload
): CheckoutContextState => ({
  ...state,
  checkoutProducts: state.checkoutProducts.filter(
    (product) => product.id !== id
  )
});

export const addProduct = ({
  state,
  payload: { product, quantity }
}: {
  state: CheckoutContextState;
  payload: AddProductPayload;
}): CheckoutContextState => {
  if (quantity === 0) return state;

  const cartProduct: CheckoutProduct = {
    ...product,
    quantity
  };

  const sameCartProduct = state.checkoutProducts.find(
    (p) => p.id === cartProduct.id
  );

  if (sameCartProduct) {
    cartProduct.quantity += sameCartProduct.quantity;
  }

  const filteredProduct = state.checkoutProducts.filter(
    (p) => p.id !== cartProduct.id
  );

  return {
    ...state,
    checkoutProducts: [...filteredProduct, cartProduct]
  };
};

export const changeQuantityProduct = ({
  state,
  payload: { id, newQuantity }
}: {
  state: CheckoutContextState;
  payload: ChangeQuantityProductPayload;
}): CheckoutContextState => {
  if (newQuantity === 0) return state;

  const sameCartProduct = state.checkoutProducts.find((p) => p.id === id);

  if (!sameCartProduct) return state;
  console.log('change qunatity');

  sameCartProduct.quantity = newQuantity;

  const filteredProduct = state.checkoutProducts.filter((p) => p.id !== id);

  return {
    ...state,
    checkoutProducts: [...filteredProduct, sameCartProduct]
  };
};

export const setCheckoutProducts = ({
  state,
  payload
}: {
  state: CheckoutContextState;
  payload: Partial<CheckoutContextState>;
}): CheckoutContextState => {
  return {
    ...state,
    ...payload
  };
};
