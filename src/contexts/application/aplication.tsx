import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import config, { Configs, defaultConfig } from '../../config';

interface ApplicationProps {
  config: Configs;
}

export const ApplicationContext = createContext<ApplicationProps>({
  config: defaultConfig
});

interface PageProviderProps {
  children?: ReactNode;
  value?: ApplicationProps;
}

export const ApplicationProvider = ({ children, value }: PageProviderProps) => {
  const [configs, setConfig] = useState<Configs>(defaultConfig);

  useEffect(() => {
    (async () => {
      setConfig(await config());
    })();
  }, []);

  return (
    <ApplicationContext.Provider
      value={
        {
          config: configs,
          ...value
        } ?? { config: configs }
      }
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  return useContext(ApplicationContext);
};
