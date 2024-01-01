const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'qwerty',
  database: 'instagram',
  // pool: {
  //   max: 5, // Maximum number of connections in the pool
  //   min: 0, // Minimum number of connections in the pool
  //   acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
  //   idle: 10000, // Maximum time, in milliseconds, that a connection can be held by the pool
  // },
});

module.exports = sequelize;
