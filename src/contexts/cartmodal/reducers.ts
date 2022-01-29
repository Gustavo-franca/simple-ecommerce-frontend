import {
  CartModalActionType,
  CartModalContextDispatcher,
  CartModalReducer,
  CartModalContextState,
  CartModalAction
} from './types';

export const cartModalActions = {
  [CartModalActionType.OPEN_CART]: ({
    state
  }: CartModalReducer): CartModalContextState => state,
  [CartModalActionType.CLOSE_CART]: ({
    state
  }: CartModalReducer): CartModalContextState => state
};

const cartModalReducer = (
  state: CartModalContextState,
  action: CartModalAction
): CartModalContextState =>
  cartModalActions[CartModalActionType[action.type]]({ state, action });

export default cartModalReducer;
