const Modelo = require('../framework/Modelo')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.');
const Local = require('./Local');
const QuadraTipo = require('./QuadraTipo');
const Recurso = require('./Recurso');

const Quadra = sequelize.define('quadra', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    largura: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    comprimento: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            
        }
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    quadraTipo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
})

Quadra.belongsTo(Local);
Local.hasMany(Quadra);

Quadra.belongsTo(QuadraTipo);
QuadraTipo.hasMany(Quadra);

Quadra.belongsToMany(Recurso, { through: 'quadra_recursos' });
Recurso.belongsToMany(Quadra, { through: 'quadra_recursos' });

module.exports = Quadra