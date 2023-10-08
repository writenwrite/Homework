const Sequelize = require('sequelize');

const sequelize = new Sequelize('testing', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Movie = require('../Models/movie'); // Sesuaikan dengan path model Anda


module.exports = sequelize;
