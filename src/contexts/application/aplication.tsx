import React, { createContext, ReactNode, useContext } from 'react';

interface ApplicationProps {
  date: Date;
}

const initialProps = {
  date: new Date()
};

export const ApplicationContext = createContext<ApplicationProps>(initialProps);

interface PageProviderProps {
  children?: ReactNode;
  value?: ApplicationProps;
}

export const ApplicationProvider = ({ children, value }: PageProviderProps) => {
  return (
    <ApplicationContext.Provider value={value ?? initialProps}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  return useContext(ApplicationContext);
};
