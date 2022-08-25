const { Sequelize, DataTypes } = require('sequelize');

module.exports = new Sequelize(process.env.NODE_ENV == 'test' ? "sqlite::memory" : 'sqlite:./db.sqlite');