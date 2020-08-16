'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person.init({
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    github: DataTypes.INTEGER,
    linkedIn: DataTypes.INTEGER,
    pronoun: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};