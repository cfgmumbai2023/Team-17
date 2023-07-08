const mongoose = require('mongoose');

const connectDB = (path) => {
    return mongoose.connect(path)
}

module.exports = connectDB