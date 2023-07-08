const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    objective:{
        type:String,
        required:true
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student"
        }
    ]
})


module.exports = mongoose.model('Group',groupSchema)