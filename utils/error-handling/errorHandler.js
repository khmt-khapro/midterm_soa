const logger = require("../logger/logger");
const BaseError = require("./baseError");

function logError(err) {
  logger.error(">>>>>", err);
}

function logErrorMiddleware(err, req, res, next) {
  logError(err);
  res.status(err.statusCode || 500).send(err.message);
  // next(err);
}

// function returnError(err, req, res, next) {
//   res.status(err.statusCode || 500).send(err.message);
// }

function isOperationalError(error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

module.exports = {
  logError,
  logErrorMiddleware,
  isOperationalError,
};
