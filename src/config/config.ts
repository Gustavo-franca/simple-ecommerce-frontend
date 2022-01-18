export interface Configs {
  appHost: string;
  appName: string;
  internalAPI: string;
  productAPIPath: string;
}

export const defaultConfig: Configs = {
  appHost: 'http://localhost:3000',
  appName: 'Simple ecommerce',
  internalAPI: 'http://localhost:8080',
  productAPIPath: '/'
};

const config = async (): Promise<Configs> =>
  await import(`./config.${process.env.REACT_APP_SCOPE}.json`);

export default config;
