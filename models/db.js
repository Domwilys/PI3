const Sequelize = require('sequelize');

const sequelize = new Sequelize('piiiiteste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};