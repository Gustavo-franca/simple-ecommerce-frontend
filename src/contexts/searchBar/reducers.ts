import {
  SearchBarAction,
  SearchBarActionType,
  SearchBarContextState,
  SearchBarReducer,
  SearchString
} from './types';

export const cartModalActions = {
  [SearchBarActionType.SET_SEARCH_STRING]: ({
    action
  }: SearchBarReducer): SearchBarContextState => ({
    search: action.payload as SearchString
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
