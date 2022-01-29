import { Dispatch } from 'react';

export type CartModalPayload = Record<string, unknown>;

export enum CartModalActionType {
  OPEN_CART = '@cart-modal/OPEN_CART',
  CLOSE_CART = '@cart-modal/CLOSE_CART'
}

export interface CartModalAction {
  type: keyof typeof CartModalActionType;
  payload: CartModalPayload;
}

export interface CartModalContextState {
  closed: boolean;
}

export interface CartModalReducer {
  state: CartModalContextState;
  action: CartModalAction;
}

export type CartModalContextDispatcher = Dispatch<CartModalAction>;
