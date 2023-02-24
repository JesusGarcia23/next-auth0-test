import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.development.env' });

export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/dist/**/*.entity.js'],
  migrations: [
    __dirname + 'src/migrations/*.ts',
    __dirname + '/dist/src/migrations/*.js',
  ],
  migrationsRun: false,
  autoLoadEntities: true,
  synchronize: false,
  cli: {
    migrationsDir: __dirname + '/src/migrations/',
  },
} as TypeOrmModuleOptions;
