const APIError = require('../errors/apiError')
const jwt = require('jsonwebtoken')
const authHandler = (req,res,next) => {
    let token = req.headers.authorization;
    // console.log(token);
    if(!token){
        throw new APIError("No Bearer Token",401);
    }
    const check = token.startsWith("Bearer");
    if(check == false){
        throw new APIError("No Bearer Token",401);
    }
    token = token.split(' ')[1]
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(payload);
        req.user = payload;
    } catch (error) {
        throw new APIError("Invalid JWT Token",401)
    }
    next();
}

module.exports = authHandler;