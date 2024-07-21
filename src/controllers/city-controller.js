const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { CityService } = require('../services/index');
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
async function destroyCity(req, res) {
  try {
    const { id } = req.params;
    const city = await CityService.destroyCity(id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
async function updateCity(req, res) {
  try {
    const { id } = req.params;
    const city = await CityService.updateCity(id, {
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
module.exports = { createCity, destroyCity, updateCity };
