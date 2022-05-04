const Modelo = require('../framework/Modelo')

class Local extends Modelo {
    static arquivo = 'local.json';

    id_quadra = 0;
    nome = '';
    username = '';
    endereco = {
        rua: "",
        numero: "",
        quadra: "",
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        estado: "",
        cidade: ""
    };
    fone = '';
    horario_funcionamento = '';
    descricao = '';
}

module.exports = Local;