import React, { createContext, ReactNode, useContext } from 'react';
import { Configs } from '../../config';

interface ApplicationProps {
  config?: Configs;
}

export const ApplicationContext = createContext<ApplicationProps>({});

interface PageProviderProps {
  children?: ReactNode;
  value?: ApplicationProps;
}

export const ApplicationProvider = ({ children, value }: PageProviderProps) => {
  return (
    <ApplicationContext.Provider value={value ?? {}}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  return useContext(ApplicationContext);
};
