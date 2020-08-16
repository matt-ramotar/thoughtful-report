'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day_Partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Day_Partner.init({
    dayId: DataTypes.INTEGER,
    personId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Day_Partner',
  });
  return Day_Partner;
};