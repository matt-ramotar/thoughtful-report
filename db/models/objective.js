'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Objective.belongsToMany(models.Day, {
        through: models.Day_Objective,
        foreignKey: 'objectiveId',
        otherKey: 'dayId',
      });
    }
  }
  Objective.init(
    {
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Objective',
    },
  );
  return Objective;
};
