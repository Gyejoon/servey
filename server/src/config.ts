import { ConnectionOptions } from 'typeorm';

export default {
  auth: {
    key: process.env.AUTH_KEY || 'servey-key',
  },
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'servey',
    password: 'password',
    database: 'servey_db',
    synchronize: true,
    logging: true,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
  } as ConnectionOptions,
};
