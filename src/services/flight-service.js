const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories/index');
const AppError = require('../utils/errors/app-error');
const { Flight } = require('../models/index');
const flightRepository = new FlightRepository(Flight);
const { compareTime } = require('../utils/helpers/datetime-helpers');
const { Op } = require('sequelize');

const createFlight = async (flight) => {
  try {
    if (compareTime(flight.arrivalTime, flight.departureTime)) {
      throw new AppError(
        'Arrival time must be after departure time',
        StatusCodes.BAD_REQUEST
      );
    }
    const res = await flightRepository.create(flight);
    return res;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
    } else if (error.name === 'SequelizeUniqueConstraintError') {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new AppError(explanation, StatusCodes.CONFLICT);
    }
    throw new AppError(
      'Error creating Flight',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAllFlights = async (query) => {
  let customFilter = {};
  let sortFilter = [];
  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split('-');
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }
  if (query.price) {
    const [minPrice, maxPrice] = query.price.split('-');
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice],
    };
  }
  if (query.travelers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travelers,
    };
  }
  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + 'T23:59:59'],
    };
  }
  if (query.sort) {
    const params = query.sort.split(',');
    const sortFilters = params.map((param) => param.split('_'));
    sortFilter = sortFilters;
    console.log('sortFilter', sortFilter);
  }
  try {
    const response = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return response;
  } catch (error) {
    console.log('error', error);
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    throw new AppError(
      'Error creating Flight',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = { createFlight, getAllFlights };
