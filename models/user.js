const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hashed_password: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    salt: {
        type: DataTypes.BLOB,
        allowNull: false
    }
});

// User.sync({ alter: true })  

module.exports = User