const Sequelize = require('sequelize');

const sequelize = new Sequelize('hw9', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgresql',
});

module.exports = sequelize;
