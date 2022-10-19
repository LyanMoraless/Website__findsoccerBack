const sequelize = require("../modelos");

const recursos = require("./recursos");
const tipos = require("./tipos");


sequelize.sync().then(async () => {
  await recursos();
  await tipos();
});