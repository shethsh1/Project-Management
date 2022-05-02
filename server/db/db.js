const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:147258369@localhost:5432/postgres", {
  logging: false
});

module.exports = db;
