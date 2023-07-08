const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
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
    }
},{
    timestamps:true
})

UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

UserSchema.methods.checkPassword = async function(pass){
    const value = await bcrypt.compare(pass,this.password);
    return value;
}

UserSchema.methods.createJWT = function(){
    const payload = {
        id:this._id,
        username:this.username,
        email:this.email
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

    // console.log(token);

    return token;
}

module.exports = mongoose.model("User",UserSchema);