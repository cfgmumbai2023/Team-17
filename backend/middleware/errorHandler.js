const APIError = require('../errors/apiError')

const errorHandler = (err,req,res,next) => {
    if(err instanceof APIError) {
        return res.status(err.statusCode).json({error:err.message})
    }
    return res.status(500).send(
        err
    )
}

module.exports = errorHandler