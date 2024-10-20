function throwError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
}

exports = {
  throwError,
};

const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || "Interval Server Error !";
  const data = error.data;

  res.status(status).json({
    status: "failed",
    message: message,
    data: data,
  });
};

module.exports = errorHandler;
