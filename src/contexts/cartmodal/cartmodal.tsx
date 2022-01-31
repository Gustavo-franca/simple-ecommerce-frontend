import React, { createContext, FC, useContext, useReducer } from 'react';
import {
  CartModalAction,
  CartModalContextDispatcher,
  CartModalContextState,
  DispatchFunction
} from './types';
import cartModalReducer from './reducers';
import { isUndefined } from 'lodash';

const defaultValue: CartModalContextState = {
  id: null,
  open: false,
  products: []
};

const CartModalStateContext = createContext<CartModalContextState | undefined>(
  undefined
);

const CartModalDispatcherContext = createContext<
  CartModalContextDispatcher | undefined
>(undefined);

export const CartModalProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartModalReducer, defaultValue);

  return (
    <CartModalStateContext.Provider value={state}>
      <CartModalDispatcherContext.Provider value={dispatch}>
        {children}
      </CartModalDispatcherContext.Provider>
    </CartModalStateContext.Provider>
  );
};

export const useCartModalState = () => {
  const state = useContext(CartModalStateContext);

  if (isUndefined(state))
    throw new Error('CartModalProvider is required to use cartModalState');

  return state;
};

export const useCartModalDispatcher = () => {
  const dispatch = useContext(CartModalDispatcherContext);
  const state = useContext(CartModalStateContext);

  if (isUndefined(dispatch) || isUndefined(state))
    throw new Error('CartModalProvider is required to use cartModalDispatcher');

  return (props: CartModalAction | DispatchFunction) => {
    if (typeof props === 'function') {
      return props({ dispatch, state });
    }
    return dispatch(props);
  };
};
