'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    static associate(models) {
      this.hasMany(models.Airport, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  city.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'city',
    }
  );
  return city;
};
