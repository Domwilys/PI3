const { Sequelize } = require('./db');
const db = require('./db');

const Curriculo = db.sequelize.define('curriculo', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    sobre: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    experiencia: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    formacaoAcademica: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    skills: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Curriculo;

//Curriculo.sync({force: true});