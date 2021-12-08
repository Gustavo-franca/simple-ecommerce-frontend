export interface Configs {
  appHost: string;
}

const config = async (): Promise<Configs> =>
  await import(`config.${process.env.SCOPE}.json`);

export default config;
