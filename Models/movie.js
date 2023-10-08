const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); // Sesuaikan dengan path file konfigurasi database Anda

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoPath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Movie;
