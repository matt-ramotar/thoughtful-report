'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_Item_Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Report_Item_Response.init({
    textVal: DataTypes.TEXT,
    numVal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report_Item_Response',
  });
  return Report_Item_Response;
};