const Modelo = require('../framework/Modelo')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.');
const Local = require('./Local');
const QuadraTipo = require('./QuadraTipo');
const Recurso = require('./Recurso');

const Quadra = sequelize.define('quadra', {
    quadra_tipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
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
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            
        }
    },
    img: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    
    cel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    fone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDecimal: true
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