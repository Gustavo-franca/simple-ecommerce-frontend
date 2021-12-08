export interface Configs {
  appHost: string;
  appName: string;
}

export const defaultConfig: Configs = {
  appHost: 'http://localhost',
  appName: 'Simple ecommerce'
};

const config = async (): Promise<Configs> =>
  await import(`./config.${process.env.REACT_APP_SCOPE}.json`);

export default config;
