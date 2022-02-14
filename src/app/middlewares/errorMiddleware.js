const NotFound = require('../errors/NotFound');
const serialize = require('../serialize/ErrorResponseSerialize');

const errorHandler = (error, req, res, next) => {
  let statusCode = 500;

  if (error instanceof NotFound) statusCode = 404;
  else statusCode = 400;

  res.status(statusCode).json(serialize(error));
  next();
};

module.exports = errorHandler;
