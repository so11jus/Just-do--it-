const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://ktrwzpdf:OMlD5UY8oiG9dInZYVwB-LOo8A9lWe3f@abul.db.elephantsql.com/ktrwzpdf')

module.exports = sequelize