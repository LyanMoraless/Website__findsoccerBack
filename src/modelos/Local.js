// const Modelo = require('../framework/Modelo')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.');
const Horario = require('./Horario');
const Usuario = require('./Usuario');

const Local = sequelize.define('local', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
        }
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    compl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {

        }
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    numero: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true
        }
    }
})


Local.belongsTo(Usuario);
Usuario.hasMany(Local);

Horario.belongsTo(Local);
Local.hasMany(Horario);


module.exports = Local