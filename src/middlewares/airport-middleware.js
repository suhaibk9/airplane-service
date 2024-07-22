const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common/index');
const AppError = require('../utils/errors/app-error');

function validateCreateRequests(req, res, next) {
  const { name, code, cityId } = req.body;

  if (!name) {
    ErrorResponse.message = 'Something went wrong';
    ErrorResponse.error = new AppError(
      ['Name is required'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!code) {
    ErrorResponse.message = 'Something went wrong';
    ErrorResponse.error = new AppError(
      ['Code is required'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!cityId) {
    ErrorResponse.message = 'Something went wrong';
    ErrorResponse.error = new AppError(
      ['City ID is required'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateRequests,
};
