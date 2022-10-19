const QuadraTipo = require("../modelos/QuadraTipo");

module.exports = async () => {
  await QuadraTipo.bulkCreate([
    {
      nome: "Society"
    },
    {
      nome: "Campo"
    },
    {
      nome: "Quadra"
    },
  ]);
};
