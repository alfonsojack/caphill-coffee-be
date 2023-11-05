/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/coffee_shop_db',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    // user: 'default',
    // password: 'Pj2izrh8VnoB',
    // host: 'ep-crimson-silence-53928070.us-east-1.postgres.vercel-storage.com',
    // port: 5432,
    // database: 'verceldb',
    connection: process.env.CUSTOM_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
// postgres://default:Pj2izrh8VnoB@ep-crimson-silence-53928070.us-east-1.postgres.vercel-storage.com:5432/verceldb