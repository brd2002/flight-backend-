'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, { foreignKey: 'airplaneId' , as: 'Airplane_Detail' });
      // NOTE if the relation key is not primary key then you need to specify the target key
      this.belongsTo(models.Airport, { foreignKey: 'departureAirportId' , as: 'DepartureAirport' , targetKey:'code' } );
      this.belongsTo(models.Airport, { foreignKey: 'arivalAirportId' , as: 'ArrivalAirport' , targetKey:'code' } );
    }
  }
  flight.init({
    flightNumber:{ 
      type:DataTypes.STRING,
      allowNull : false
    },
    airplaneId:{
      type:DataTypes.INTEGER,
      allowNull : false
    },
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull : false
    },
    arivalAirportId: {
      type:DataTypes.STRING,
      allowNull : false
    },
    arivalTime: {
      type:DataTypes.DATE,
      allowNull : false
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull : false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull : false
    },
    boardingGate: {
      type:DataTypes.STRING
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};