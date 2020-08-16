'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notecard_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Notecard_Type.init({
    type: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Notecard_Type',
  });
  return Notecard_Type;
};