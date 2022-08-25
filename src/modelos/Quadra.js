const Modelo = require('../framework/Modelo')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('.')

const Quadra = sequelize.define('Quadra', {
    local_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
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

// class Quadra extends Modelo {
//     static arquivo = 'quadra.json';

//     local_id = 0;
//     quadra_tipo_id = 0;
//     imagem = 'url';
//     nome = '';
//     largura = '';
//     comprimento = '';
//     descricao = '';
//     piso = '';
//     precoHora = 0;
//     precoMeiaHora = 0; 
//     avaliacao = 0;
//     chuteira_tipos_aceito = '';
//     tem_vestiario = false;
//     tem_banheiro = false;
//     tem_chuveiro = false;
//     tem_bebedouro = false;
//     tem_coletes = false;
//     tem_juiz = false;
//     tem_cantina = false;
//     tem_areaAlimentacao = false;
//     tem_chuteira = false;
//     tem_bola = false;
//     foto = null;
//     fotos = [];
// }

//module.exports = Quadra;

module.exports = Quadra