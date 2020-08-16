'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notecard_Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Notecard_Tag.init({
    notecardId: DataTypes.INTEGER,
    tag: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Notecard_Tag',
  });
  return Notecard_Tag;
};