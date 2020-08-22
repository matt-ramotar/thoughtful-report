'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.hasMany(models.Report_Response, { foreignKey: 'responseId' });
      Report.belongsTo(models.Day, { foreignKey: 'reportId' });
    }
  }
  Report.init(
    {
      responseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Report',
    },
  );
  return Report;
};
