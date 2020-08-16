'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day_Objective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Day_Objective.init({
    dayId: DataTypes.INTEGER,
    objectiveId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Day_Objective',
  });
  return Day_Objective;
};