const Sequelize = require("sequelize");

const DB_NAME = process.env.MYSQL_DATABASE;
const DB_PASSW = process.env.MYSQL_ROOT_PASSWORD;

const sequelize = new Sequelize(DB_NAME, "root", DB_PASSW, {
  host: "db",
  dialect: "mysql",
  operatorsAQliases: false,
});

module.exports = sequelize;
global.sequelize = sequelize;
