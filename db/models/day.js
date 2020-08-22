'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Day.belongsToMany(models.Objective, {
        through: models.Day_Objective,
        foreignKey: 'dayId',
        otherKey: 'objectiveId',
      });
      Day.hasOne(models.Report);
    }
  }
  Day.init(
    {
      date: DataTypes.DATE,
      reportId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Day',
    },
  );
  return Day;
};
