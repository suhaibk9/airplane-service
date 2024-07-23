// 'use strict';
// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Flight extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       this.belongsTo(models.Airplane, {
//         foreignKey: 'airplaneId',
//         onDelete: 'CASCADE',
//       });
//       this.belongsTo(models.Airport, {
//         foreignKey: 'departureAirportId',
//         onDelete: 'CASCADE',
//       });
//       this.belongsTo(models.Airport, {
//         foreignKey: 'arrivalAirportId',
//         onDelete: 'CASCADE',
//       });
//     }
//   }
//   Flight.init(
//     {
//       flightNumber: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       airplaneId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       departureAirportId: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       arrivalAirportId: {
//         allowNull: false,
//         type: DataTypes.STRING,
//       },
//       arrivalTime: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//       departureTime: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//       price: {
//         allowNull: false,
//         type: DataTypes.INTEGER,
//       },
//       boardingGate: {
//         type: DataTypes.STRING,
//       },
//       totalSeats: {
//         allowNull: false,
//         type: DataTypes.INTEGER,
//       },
//     },
//     {
//       sequelize,
//       modelName: 'Flight',
//     }
//   );
//   return Flight;
// };
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as: 'airplaneDetails',
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departure_airport',
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrival_airport',
      });
    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Flight',
    }
  );
  return Flight;
};
