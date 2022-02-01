import { Dispatch } from 'react';
import { Product } from '../../types';

export type DispatchFunctionProps = {
  dispatch: SearchBarContextDispatcher;
};

export type DispatchFunction = (props: DispatchFunctionProps) => void;

export type SearchString = string;

export type SearchBarPayload = SearchString | Product[];

export enum SearchBarActionType {
  SET_SEARCH_STRING = '@search-bar/SET_SEARCH_STRING',
  SET_PRODUCTS = '@search-bar/SET_PRODUCTS'
}

export interface SearchBarAction {
  type: keyof typeof SearchBarActionType;
  payload?: SearchBarPayload;
}

export interface SearchBarContextState {
  search: string;
  products: Product[] | null;
}

export interface SearchBarReducer {
  state: SearchBarContextState;
  action: SearchBarAction;
}

export type SearchBarContextDispatcher = Dispatch<SearchBarAction>;
