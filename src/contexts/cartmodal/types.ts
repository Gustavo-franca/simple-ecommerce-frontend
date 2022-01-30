import { Dispatch } from 'react';
import { Product } from '../../types';

export type RemoveProductPayload = {
  id: string;
};

export type AddProductPayload = {
  product: Product;
  quantity: number;
};
export type ChangeQuantityProductPayload = {
  id: string;
  newQuantity: number;
};

export type DispatchFunctionProps = {
  dispatch: CartModalContextDispatcher;
  state: CartModalContextState;
};

export type DispatchFunction = (props: DispatchFunctionProps) => void;

export type CartModalPayload =
  | RemoveProductPayload
  | AddProductPayload
  | ChangeQuantityProductPayload
  | Partial<CartModalContextState>;

export enum CartModalActionType {
  OPEN_CART = '@cart-modal/OPEN_CART',
  CLOSE_CART = '@cart-modal/CLOSE_CART',
  REMOVE_PRODUCT = '@cart-modal/REMOVE_PRODUCT',
  ADD_PRODUCT = '@cart-modal/ADD_PRODUCT',
  CHANGE_QUANTITY_PRODUCT = '@cart-modal/CHANGE_QUANTITY_PRODUCT',
  SET_CART = '@cart-modal/SET_CART'
}

export interface CartModalAction {
  type: keyof typeof CartModalActionType;
  payload?: CartModalPayload;
}

export interface CartModalContextState {
  id: string | null;
  open: boolean;
  products: CartProduct[];
}

export interface CartModalReducer {
  state: CartModalContextState;
  action: CartModalAction;
}
export interface CartProduct {
  id: string;
  quantity: number;
  title: string;
  imgUrl: string;
  description: string;
  price: number;
  stock: number;
}

export type CartModalContextDispatcher = Dispatch<CartModalAction>;
