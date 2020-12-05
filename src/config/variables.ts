import * as dotenv from 'dotenv';

dotenv.config();

type NodeEnv = 'development' | 'production' | 'test';

const nodeEnv = process.env.NODE_ENV as NodeEnv;

const getDBUrl = () => {
  if (nodeEnv === 'development') return process.env.DB_URL_DEV;
  if (nodeEnv === 'test') return process.env.DB_URL_TEST;

  return process.env.DB_URL_PROD;
};

const getFrontendUrl = () => {
  if (nodeEnv === 'production') return process.env.FRONTEND_URL;
  if (nodeEnv === 'development') return process.env.FRONTEND_URL_DEV;
  return `http://localhost:${process.env.PORT}`;
};

export const envVariables = {
  nodeEnv,
  inProduction: nodeEnv === 'production',
  port: process.env.PORT,
  dbUrl: getDBUrl(),
  frontendUrl: getFrontendUrl(),
};
