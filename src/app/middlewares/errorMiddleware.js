const NotFound = require('../errors/NotFound');
const errorSerialize = require('../serialize/errorSerialize');

const errorHandler = (error, req, res, next) => {
  let statusCode = 500;

  if (error instanceof NotFound) statusCode = 404;
  else statusCode = 400;

  res.status(statusCode).json(errorSerialize(error));
  next();
};

module.exports = errorHandler;