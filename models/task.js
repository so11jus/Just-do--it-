const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('../config/db');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
    // priority: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0
    // },
    // startDate: {
    //     type: DataTypes.DATEONLY,
    //     defaultValue: sequelize.NOW,
    // },
    // deadlineDate: {
    //     type: DataTypes.DATEONLY,
    //     allowNull: true
    // }
});


module.exports = Task