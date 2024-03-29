const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide Username"],
    },
    password:{
        type:String,
        required:[true,"Please provide Password"],
    },
    email:{
        type:String,
        required:[true,"Please provide Email"],
        unique:true
    },
},{
    timestamps:true
})

AdminSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

AdminSchema.methods.checkPassword = async function(pass){
    const value = await bcrypt.compare(pass,this.password);
    return value;
}

AdminSchema.methods.createJWT = function(){
    const payload = {
        id:this._id,
        username:this.username,
        email:this.email,
        admin:true
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

    // console.log(token);

    return token;
}

module.exports = mongoose.model("Admin",AdminSchema);