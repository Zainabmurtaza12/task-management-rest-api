// Global Error Handling Middleware

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
};

module.exports = errorHandler;
