const Recurso = require("../modelos/Recurso");

module.exports = async () => {

  await Recurso.bulkCreate([
    {
      nome: "Vestiário"
    },
    {
      nome: "Cantina"
    },
    {
      nome: "Bola"
    },
    {
      nome: "Banheiro"
    },
    {
      nome: "Coletes"
    },
    {
      nome: "Area de Alimentação"
    },
    {
      nome: "Estacionamento Próprio"
    },
    {
      nome: "Chuveiro"
    },
    {
      nome: "Juiz"
    },
    {
      nome: "Chuteira"
    },
  ])
}

