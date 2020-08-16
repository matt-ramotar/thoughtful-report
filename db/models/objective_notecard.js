'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objective_Notecard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Objective_Notecard.init({
    objectiveId: DataTypes.INTEGER,
    notecardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Objective_Notecard',
  });
  return Objective_Notecard;
};