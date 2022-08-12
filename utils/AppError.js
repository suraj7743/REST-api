class AppError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.message = message;
    this.statuscode = statuscode;
    this.isOperation = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;
