import {
  CartModalActionType,
  CartModalReducer,
  CartModalContextState,
  CartModalAction,
  RemoveProductPayload,
  AddProductPayload,
  ChangeQuantityProductPayload
} from './types';
import {
  addProduct,
  changeQuantityProduct,
  closeModal,
  openModal,
  removeProduct,
  setCart
} from './actions';

export const cartModalActions = {
  [CartModalActionType.OPEN_CART]: ({
    state
  }: CartModalReducer): CartModalContextState => openModal(state),
  [CartModalActionType.CLOSE_CART]: ({
    state
  }: CartModalReducer): CartModalContextState => closeModal(state),
  [CartModalActionType.REMOVE_PRODUCT]: ({
    state,
    action
  }: CartModalReducer): CartModalContextState =>
    removeProduct(state, action.payload as RemoveProductPayload),
  [CartModalActionType.ADD_PRODUCT]: ({
    state,
    action
  }: CartModalReducer): CartModalContextState =>
    addProduct({ state, payload: action.payload as AddProductPayload }),
  [CartModalActionType.CHANGE_QUANTITY_PRODUCT]: ({
    state,
    action
  }: CartModalReducer): CartModalContextState =>
    changeQuantityProduct({
      payload: action.payload as ChangeQuantityProductPayload,
      state
    }),
  [CartModalActionType.SET_CART]: ({
    state,
    action
  }: CartModalReducer): CartModalContextState =>
    setCart({
      payload: action.payload as Partial<CartModalContextState>,
      state
    })
};

const cartModalReducer = (
  state: CartModalContextState,
  action: CartModalAction
): CartModalContextState =>
  cartModalActions[CartModalActionType[action.type]]({
    state,
    action
  });

export default cartModalReducer;
