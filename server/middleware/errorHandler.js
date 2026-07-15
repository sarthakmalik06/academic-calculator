/**
 * Global Express error-handling middleware.
 *
 * Express identifies error handlers by their 4-argument signature (err, req, res, next).
 * This middleware catches any error passed via next(error) anywhere in the app.
 *
 * In development, we return the full stack trace for easy debugging.
 * In production, we return only a clean message so internal details stay hidden.
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only expose stack trace in development
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default errorHandler;
