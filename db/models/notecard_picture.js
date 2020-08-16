'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notecard_Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Notecard_Picture.init({
    notecardId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notecard_Picture',
  });
  return Notecard_Picture;
};