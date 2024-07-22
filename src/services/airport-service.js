const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
// Repository
const { AirportRepository } = require('../repositories/index');
const { Airport } = require('../models/index');

const airportRepository = new AirportRepository(Airport);

// Function to create an airplane
const createAirport = async (airport) => {
  try {
    const res = await airportRepository.create(airport);
    return res;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));

      throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    throw new AppError(
      'Error creating Airport',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Function to get all airports
const getAirports = async () => {
  try {
    return await airportRepository.getAll();
  } catch (error) {
    throw new AppError(
      'Error getting Airports',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
//Function to get airport By Primary Key
const getAirport = async (primaryKey) => {
  try {
    return await airportRepository.get(primaryKey);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('Airport not found', StatusCodes.NOT_FOUND);
    }
    throw new AppError(
      'Error getting Airport',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const destroyAirport = async (primaryKey) => {
  try {
    return await airportRepository.destroy(primaryKey);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('Airport not found', StatusCodes.NOT_FOUND);
    }
    throw new AppError(
      'Error deleting Airport',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const updateAirport = async (id, data) => {
  try {
    return await airportRepository.update(id, data);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('Airport not found', StatusCodes.NOT_FOUND);
    }
    throw new AppError(
      'Error updating Airport',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = {
  updateAirport,
  createAirport,
  destroyAirport,
  getAirports,
  getAirport,
};
