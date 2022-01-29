import React, { createContext, FC, useContext, useReducer } from 'react';
import { CartModalContextDispatcher, CartModalContextState } from './types';
import cartModalReducer from './reducers';

const defaultValue: CartModalContextState = {
  closed: true
};

const CartModalStateContext = createContext<CartModalContextState | undefined>(
  undefined
);

const CartModalDispatcherContext = createContext<
  CartModalContextDispatcher | undefined
>(() => undefined);

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
  return useContext(CartModalStateContext);
};

export const useCartModalDispatcher = () => {
  return useContext(CartModalDispatcherContext);
};
