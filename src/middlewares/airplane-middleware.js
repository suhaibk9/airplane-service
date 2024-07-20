const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common/index');
const AppError = require('../utils/errors/app-error');
function validateCreateRequests(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong';
    ErrorResponse.error = new AppError(
      ['Model number is required'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequests,
};
