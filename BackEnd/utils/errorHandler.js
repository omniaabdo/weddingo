const ERRORHANDELLER = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
};

module.exports = ERRORHANDELLER;
