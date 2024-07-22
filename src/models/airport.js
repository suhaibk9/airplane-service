'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      this.belongsTo(models.city, {
        foreignKey: 'cityId',
      });
      this.hasMany(models.Flight, {
        foreignKey: 'departureAirportId',
      });
      this.hasMany(models.Flight, {
        foreignKey: 'arrivalAirportId',
      });
    }
  }

  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Airport',
    }
  );
  return Airport;
};
