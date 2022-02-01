import {
  SearchBarAction,
  SearchBarActionType,
  SearchBarContextState,
  SearchBarReducer,
  SearchString
} from './types';
import { Product } from '../../types';
import { stat } from 'fs';

export const cartModalActions = {
  [SearchBarActionType.SET_SEARCH_STRING]: ({
    state,
    action
  }: SearchBarReducer): SearchBarContextState => ({
    ...state,
    search: action.payload as SearchString
  }),
  [SearchBarActionType.SET_PRODUCTS]: ({
    state,
    action
  }: SearchBarReducer): SearchBarContextState => ({
    ...state,
    products: action.payload as Product[]
  })
};

const cartModalReducer = (
  state: SearchBarContextState,
  action: SearchBarAction
): SearchBarContextState =>
  cartModalActions[SearchBarActionType[action.type]]({
    state,
    action
  });

export default cartModalReducer;
