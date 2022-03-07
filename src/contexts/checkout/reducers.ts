import {
  CheckoutActionType,
  CheckoutReducer,
  CheckoutContextState,
  CheckoutAction,
  RemoveProductPayload,
  AddProductPayload,
  ChangeQuantityProductPayload,
  CheckoutProduct
} from './types';
import {
  addProduct,
  changeQuantityProduct,
  removeProduct,
  setCheckoutProducts
} from './actions';

export const CheckoutActions = {
  [CheckoutActionType.REMOVE_PRODUCT]: ({
    state,
    action
  }: CheckoutReducer): CheckoutContextState =>
    removeProduct(state, action.payload as RemoveProductPayload),
  [CheckoutActionType.ADD_PRODUCT]: ({
    state,
    action
  }: CheckoutReducer): CheckoutContextState =>
    addProduct({ state, payload: action.payload as AddProductPayload }),
  [CheckoutActionType.CHANGE_QUANTITY_PRODUCT]: ({
    state,
    action
  }: CheckoutReducer): CheckoutContextState =>
    changeQuantityProduct({
      payload: action.payload as ChangeQuantityProductPayload,
      state
    }),
  [CheckoutActionType.SET_CHECKOUT_PRODUCTS]: ({
    state,
    action
  }: CheckoutReducer): CheckoutContextState =>
    setCheckoutProducts({
      payload: {
        checkoutProducts: action.payload as CheckoutProduct[]
      },
      state
    })
};

const cartModalReducer = (
  state: CheckoutContextState,
  action: CheckoutAction
): CheckoutContextState =>
  CheckoutActions[CheckoutActionType[action.type]]({
    state,
    action
  });

export default cartModalReducer;
