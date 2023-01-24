const { DataTypes } = require('sequelize');
const sequelize = require('../DB');

const Genres = sequelize.define('Genres', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Genres;