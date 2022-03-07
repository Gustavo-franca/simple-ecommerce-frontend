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
  dispatch: CheckoutContextDispatcher;
};

export type DispatchFunction = (props: DispatchFunctionProps) => void;

export type CheckoutPayload =
  | RemoveProductPayload
  | AddProductPayload
  | ChangeQuantityProductPayload
  | CheckoutProduct[];

export enum CheckoutActionType {
  REMOVE_PRODUCT = '@checkout/REMOVE_PRODUCT',
  ADD_PRODUCT = '@checkout/ADD_PRODUCT',
  CHANGE_QUANTITY_PRODUCT = '@checkout/CHANGE_QUANTITY_PRODUCT',
  SET_CHECKOUT_PRODUCTS = '@checkout/SET_CHECKOUT_PRODUCTS'
}

export interface CheckoutAction {
  type: keyof typeof CheckoutActionType;
  payload?: CheckoutPayload;
}

export interface CheckoutContextState {
  checkoutProducts: CheckoutProduct[];
}

export interface CheckoutReducer {
  state: CheckoutContextState;
  action: CheckoutAction;
}
export interface CheckoutProduct {
  id: string;
  quantity: number;
  title: string;
  imgUrl: string;
  description: string;
  price: number;
  stock: number;
}

export type CheckoutContextDispatcher = Dispatch<CheckoutAction>;
