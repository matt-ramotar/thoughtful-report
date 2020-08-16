'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Report_Response.init({
    itemId: DataTypes.INTEGER,
    responseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report_Response',
  });
  return Report_Response;
};