export const development = {
    client: 'mssql',
    connection: {
      server: 'localhost',
      password: 'teste',
      user: 'teste_teste',
      database: 'master',
    },
    migrations: {
      tableName: 'knex_user',
      directory: `${__dirname}/repository/databaseKnex/migrations`,
    },
  };