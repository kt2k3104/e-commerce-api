import * as dotenv from 'dotenv';
import * as process from 'process';
import { DataSource } from 'typeorm';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
  entities: ['dist/**/*.entity.js'],
  migrations: ['./src/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
