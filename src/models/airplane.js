'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {

    static associate(models) {
      // define association here
      this.hasMany(models.flight, { foreignKey: 'airplaneId'});
    }
  }
  Airplane.init({
    modelNumber: {
      // ? This is JavaScript level constraint
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};