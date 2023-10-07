const Sequelize = require('sequelize');
const sequelize = require('../Config/db');

const Movie = sequelize.define('movies', {
    title: Sequelize.STRING,
    genres: Sequelize.STRING,
    year: Sequelize.STRING
}, {
    timestamps: false, // Disable timestamps
});

module.exports = Movie;
