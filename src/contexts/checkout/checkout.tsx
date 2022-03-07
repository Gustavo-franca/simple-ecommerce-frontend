import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useReducer
} from 'react';
import {
  CheckoutAction,
  CheckoutContextDispatcher,
  CheckoutContextState,
  DispatchFunction
} from './types';
import checkoutReducer from './reducers';
import { isUndefined } from 'lodash';

const defaultValue: CheckoutContextState = {
  checkoutProducts: []
};

const CheckoutStateContext = createContext<CheckoutContextState | undefined>(
  undefined
);

const CheckoutDispatcherContext = createContext<
  CheckoutContextDispatcher | undefined
>(undefined);

export const CheckoutProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, defaultValue);

  return (
    <CheckoutStateContext.Provider value={state}>
      <CheckoutDispatcherContext.Provider value={dispatch}>
        {children}
      </CheckoutDispatcherContext.Provider>
    </CheckoutStateContext.Provider>
  );
};

export const useCheckoutState = () => {
  const state = useContext(CheckoutStateContext);

  if (isUndefined(state))
    throw new Error('CheckoutProvider is required to use checkoutState');

  return state;
};

export const useCheckoutDispatcher = () => {
  const dispatch = useContext(CheckoutDispatcherContext);

  if (isUndefined(dispatch))
    throw new Error('CheckoutProvider is required to use checkoutDispatcher');

  return useCallback(
    (props: CheckoutAction | DispatchFunction) => {
      if (typeof props === 'function') {
        return props({ dispatch });
      }
      return dispatch(props);
    },
    [dispatch]
  );
};
