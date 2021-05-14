const { Sequelize } = require('sequelize')
const { database } = require('./config')

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
    host: database.host,
    dialect: 'postgres'
}
)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Connected.');
    }).catch(err => {
        console.error('Connection error', err);
    })


module.exports = sequelize