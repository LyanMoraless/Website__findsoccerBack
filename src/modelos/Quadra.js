const Modelo = require('../framework/Modelo')
const { Sequelize, Datatypes } = require('sequelize');

const sequelize = new Sequelize(process.env.NODE_ENV == 'test' ? "sqlite::memory" : 'sqlite:./db.sql');

const Quadra = sequelize.define('Quadra', {
    local_id: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    quadra_tipo_id: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    username: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
        }
    },
    descricao: {
        type: Datatypes.STRING,
        allowNull: true,
        validate: {
            
        }
    },
    img: {
        type: Datatypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    
    cel: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    fone: {
        type: Datatypes.STRING,
        allowNull: true,
        validate: {
            
        }
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },

    cep: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rua: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    compl: {
        type: Datatypes.STRING,
        allowNull: true,
        validate: {

        }
    },
    bairro: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    estado: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    cidade: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    numero: {
        type: Datatypes.NUMBER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true
        }
    },

    preco: {
        type: Datatypes.DECIMAL,
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

module.exports = { sequelize, Quadra }