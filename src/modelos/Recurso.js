const Modelo = require('../framework/Modelo')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.');

const Recurso = sequelize.define('recurso', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
})


module.exports = Recurso