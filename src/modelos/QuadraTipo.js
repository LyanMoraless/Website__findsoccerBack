const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.');

const QuadraTipo = sequelize.define('quadra_tipo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
})

module.exports = QuadraTipo;