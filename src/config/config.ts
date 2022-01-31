export interface Configs {
  appHost: string;
  appName: string;
  productAPIPath: string;
  cartAPIPath: string;
}

export const defaultConfig: Configs = {
  appHost: 'http://localhost:3000',
  appName: 'Simple ecommerce',
  productAPIPath: 'http://localhost:8080/products',
  cartAPIPath: 'http://localhost:8080/cart'
};

const config = async (): Promise<Configs> =>
  await import(`./config.${process.env.REACT_APP_SCOPE}.json`);

export default config;
