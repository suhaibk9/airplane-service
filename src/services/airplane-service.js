const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
// Repository
const { AirplaneRepository } = require('../repositories/index');
const { Airplane } = require('../models/index');

const airplaneRepository = new AirplaneRepository(Airplane);

// Function to create an airplane
const createAirplane = async (airplane) => {
  try {
    const res = await airplaneRepository.create(airplane);
    return res;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      console.log('Explanations: ', explanation);
      throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
    } else {
      throw error;
    }
  }
};

// Function to get all airplanes
const getAirplanes = async () => {
  try {
    return await airplaneRepository.getAll();
  } catch (error) {
    throw new AppError(
      'Error getting airplanes',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
//Function to get Airplane By Primary Key
const getAirplane = async (primaryKey) => {
  try {
    return await airplaneRepository.get(primaryKey);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('Airplane not found', StatusCodes.NOT_FOUND);
    }
    throw new AppError(
      'Error getting airplane',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
};
