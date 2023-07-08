const notFoundHandler = (req,res,next) => {
    return res.status(404).json({msg:"/ Not Found"})
}

module.exports = notFoundHandler;