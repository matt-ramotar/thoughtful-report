'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report_Item.belongsToMany(models.Report_Item_Response, {
        through: models.Report_Response,
        foreignKey: 'itemId',
        otherKey: 'responseId',
      });
      Report_Item.hasMany(models.Report_Item_Type, { foreignKey: 'itemType' });
      Report_Item.hasMany(models.Report_Prompt_Type, { foreignKey: 'promptType' });
    }
  }
  Report_Item.init(
    {
      prompt: DataTypes.TEXT,
      promptTypeId: DataTypes.INTEGER,
      itemTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Report_Item',
    },
  );
  return Report_Item;
};
