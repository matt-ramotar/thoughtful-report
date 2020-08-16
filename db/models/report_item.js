'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Report_Item.init({
    promptType: DataTypes.INTEGER,
    itemType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report_Item',
  });
  return Report_Item;
};