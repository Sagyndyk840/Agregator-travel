import ApiError from '../exceptions/api-error.js'

function errorMiddleware (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
      status: err.status,
      errors: err.errors
    })
  }

  return res.status(err.status).json({
    message: 'Непредвиденная ошибка'
  })
}

export default errorMiddleware