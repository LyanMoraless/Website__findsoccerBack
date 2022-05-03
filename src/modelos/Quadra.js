const Modelo = require('../framework/Modelo')

class Quadra extends Modelo {
    static arquivo = 'quadra.json';

    quadra_tipo_id = 0;
    imagem = 'url';
    nome = '';
    largura = '';
    comprimento = '';
    descricao = '';
    piso = '';
    chuteira_tipos_aceito = '';
    tem_vestiario = false;
    tem_banheiro = false;
    tem_chuveiro = false;
    tem_bebedouro = false;
    tem_coletes = false;
    tem_juiz = false;
    tem_cantina = false;
    tem_areaAlimentacao = false;
    tem_chuteira = false;
    tem_bola = false;
    foto = null;
    fotos = [];
    horarios = [];
    precos = [];
}

module.exports = Quadra;