const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { AirplaneService } = require('../services/index');


async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
async function getAirplane(req, res) {
  try {
    const { id } = req.params;
    const airplane = await AirplaneService.getAirplane(id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;

    return res.status(err.statusCode).json(ErrorResponse);
  }
}
async function destroyAirplane(req, res) {
  try {
    const { id } = req.params;
    const airplane = await AirplaneService.destroyAirplane(id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
async function updateAirplane(req, res) {
  try {
    const { id } = req.params;
    const airplane = await AirplaneService.updateAirplane(id, {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    return res.status(err.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  updateAirplane,
  createAirplane,
  destroyAirplane,
  getAirplanes,
  getAirplane,
};
