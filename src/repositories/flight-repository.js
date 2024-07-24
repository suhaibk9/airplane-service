const { Sequelize } = require('sequelize');

const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models/index');
const { Airport, city } = require('../models/index');
const { addRowLockOnFlights } = require('../repositories/queries');
const db = require('../models/index');
const { add } = require('nodemon/lib/rules');
class FlightRepository extends CrudRepository {
  constructor(model) {
    super(model);
  }
  async getAllFlights(filter, sort) {
    const response = await this.model.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          as: 'airplaneDetails',
          required: true,
        },
        {
          model: Airport,
          required: true,
          as: 'departure_airport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.departureAirportId'),
              '=',
              Sequelize.col('departure_airport.code')
            ),
          },
          include: {
            model: city,
            required: true,
          },
        },
        {
          model: Airport,
          required: true,
          as: 'arrival_airport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.arrivalAirportId'),
              '=',
              Sequelize.col('arrival_airport.code')
            ),
          },
          include: {
            model: city,
            required: true,
          },
        },
      ],
    });
    return response;
  }
  async updateRemainingSeats(flightId, seats, dec = '1') {
    await db.sequelize.query('SELECT * FROM Flights');
    await db.sequelize.query(addRowLockOnFlights(flightId));
    const flight = await this.model.findByPk(flightId);
    if (parseInt(dec)) {
      await flight.decrement('totalSeats', {
        by: seats,
      });
    } else {
      await flight.increment('totalSeats', {
        by: seats,
      });
    }
    await flight.save();
    return flight;
  }
}
module.exports = FlightRepository;
