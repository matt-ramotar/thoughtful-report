'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Key extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Key.init({
    key: DataTypes.TEXT,
    val: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Key',
  });
  return Key;
};