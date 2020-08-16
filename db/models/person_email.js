'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person_Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person_Email.init({
    personId: DataTypes.INTEGER,
    email: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Person_Email',
  });
  return Person_Email;
};