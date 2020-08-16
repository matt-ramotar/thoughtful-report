'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objective_Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Objective_Tag.init({
    objectiveId: DataTypes.INTEGER,
    tag: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Objective_Tag',
  });
  return Objective_Tag;
};