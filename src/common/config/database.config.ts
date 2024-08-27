import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

const databaseConfig = {
  mysql: {
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    db: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  },
};

export { databaseConfig };
