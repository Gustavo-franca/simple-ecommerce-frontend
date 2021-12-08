export interface Configs {
  appHost: string;
}

export const defaultConfig: Configs = {
  appHost: 'http://localhost'
};

const config = async (): Promise<Configs> =>
  await import(`config.${process.env.SCOPE}.json`);

export default config;
