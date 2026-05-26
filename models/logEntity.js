const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./db')

const logEntity = sequelize.define('logentity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    itemname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalquantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    totalSalequantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    }
})
module.exports = logEntity