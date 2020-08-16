'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LinkedIn_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LinkedIn_Profile.init({
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'LinkedIn_Profile',
  });
  return LinkedIn_Profile;
};