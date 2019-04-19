import dotenv from 'dotenv';

dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

export default {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
