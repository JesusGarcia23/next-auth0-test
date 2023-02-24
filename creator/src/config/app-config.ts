export const appConfig = () => ({
  typeorm: {
    options: {
      database: process.env.DB_NAME || '',
      type: process.env.DB_TYPE || '',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || '',
      synchronize: false,
      migrations: [],
      keepConnectionAlive: true,
    },
  },
});
