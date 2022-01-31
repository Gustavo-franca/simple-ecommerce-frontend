import React, { createContext, FC, useContext, useReducer } from 'react';
import {
  DispatchFunction,
  SearchBarAction,
  SearchBarContextDispatcher,
  SearchBarContextState
} from './types';

import searchReducer from './reducers';
import { isUndefined } from 'lodash';

const defaultValue: SearchBarContextState = {
  search: ''
};

const SearchBarStateContext = createContext<SearchBarContextState | undefined>(
  undefined
);

const SearchBarDispatcherContext = createContext<
  SearchBarContextDispatcher | undefined
>(undefined);

export const SearchBarProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, defaultValue);

  return (
    <SearchBarStateContext.Provider value={state}>
      <SearchBarDispatcherContext.Provider value={dispatch}>
        {children}
      </SearchBarDispatcherContext.Provider>
    </SearchBarStateContext.Provider>
  );
};

export const useSearchBarState = () => {
  const state = useContext(SearchBarStateContext);

  if (isUndefined(state))
    throw new Error('SearchBarProvider is required to use cartModalState');

  return state;
};

export const useSearchBarDispatcher = () => {
  const dispatch = useContext(SearchBarDispatcherContext);
  const state = useContext(SearchBarStateContext);

  if (isUndefined(dispatch) || isUndefined(state))
    throw new Error('SearchBarProvider is required to use SearchBarDispatcher');

  return (props: SearchBarAction | DispatchFunction) => {
    if (typeof props === 'function') {
      return props({ dispatch, state });
    }
    return dispatch(props);
  };
};
