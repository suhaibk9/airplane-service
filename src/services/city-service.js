const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
// Repository
const { CityRepository } = require('../repositories/index');
const { city } = require('../models/index');
const cityRepository = new CityRepository(city);
// Function to create a city
const createCity = async (city) => {
  try {
    const res = await cityRepository.create(city);
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
      'Error creating city',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const destroyCity = async (primaryKey) => {
  try {
    return await cityRepository.destroy(primaryKey);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('City not found', StatusCodes.NOT_FOUND);
    }
    throw new AppError(
      'Error deleting city',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const updateCity = async (id, city) => {
  try {
    return await cityRepository.update(id, city);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('City not found', StatusCodes.NOT_FOUND);
    }
    throw new AppError(
      'Error updating city',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = { createCity, destroyCity, updateCity };
