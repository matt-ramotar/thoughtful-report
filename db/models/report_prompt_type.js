'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_Prompt_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report_Prompt_Type.belongsTo(models.Report_Item, { foreignKey: 'promptType' });
    }
  }
  Report_Prompt_Type.init(
    {
      isAskingAboutWho: DataTypes.TEXT,
      isAskingAboutWhat: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Report_Prompt_Type',
    },
  );
  return Report_Prompt_Type;
};
