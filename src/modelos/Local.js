// const Modelo = require('../framework/Modelo')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.')

const Local = sequelize.define('Local', {
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
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
    },
    horarios: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isArray: true
        }
    }
})

// class Local extends Modelo {
//     static arquivo = 'local.json';

//     nome = '';
//     username = '';
//     endereco = {
//         rua: "",
//         numero: "",
//         quadra: "",
//         cep: "",
//         logradouro: "",
//         complemento: "",
//         bairro: "",
//         estado: "",
//         cidade: ""
//     };
//     fone = '';
//     horarios = [];
//     descricao = '';
//     usuario_id = 0;
// }

// module.exports = Local;

module.exports = Local