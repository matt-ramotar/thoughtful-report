'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person_Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person_Picture.init({
    personId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Person_Picture',
  });
  return Person_Picture;
};