const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')



class Time extends Model { }

Time.init({
    id_time: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    time: {
        type: DataTypes.STRING
    }
},
    {
        sequelize,
        tableName: 'time'
    })


module.exports = Time