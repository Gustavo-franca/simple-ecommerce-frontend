import { Dispatch } from 'react';

export type DispatchFunctionProps = {
  dispatch: SearchBarContextDispatcher;
  state: SearchBarContextState;
};

export type DispatchFunction = (props: DispatchFunctionProps) => void;

export type SearchString = string;

export type SearchBarPayload = SearchString;

export enum SearchBarActionType {
  SET_SEARCH_STRING = '@search-bar/SET_SEARCH_STRING'
}

export interface SearchBarAction {
  type: keyof typeof SearchBarActionType;
  payload?: SearchBarPayload;
}

export interface SearchBarContextState {
  search: string;
}

export interface SearchBarReducer {
  state: SearchBarContextState;
  action: SearchBarAction;
}

export type SearchBarContextDispatcher = Dispatch<SearchBarAction>;
