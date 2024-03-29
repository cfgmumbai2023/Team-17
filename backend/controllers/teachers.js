const APIError = require('../errors/apiError')
const Teacher = require('../db/teacher')
const School = require('../db/school')

const register = async(req,res) => {
    const {username,email,password,school} = req.body;
    if(!username || !email || !password || !school || username === "" || email === "" || password === ""){
        throw new APIError('Please provide valid credentials',400);
    }
    const chechUser = await Teacher.findOne({email:email})
    if(chechUser){
        throw new APIError('Email already exists',400);
    }
    const checkSchool = await School.findOne({name:school})
    if(!checkSchool){
        throw new APIError('No School Exists',400);
    }
    const user = await Teacher.create({username,email,password,school:checkSchool._id});
    res.status(201).json({
        username:user.username,
        email:user.email
    })
}

const login = async(req, res) => {
    const {email,password} = req.body;
    if(!email || !password || email === "" || password === ""){
        throw new APIError("Please provide email and password",400);
    }
    const chechUser = await Teacher.findOne({email:email});
    if(!chechUser){
        throw new APIError('Email Does not exists',400);
    }
    const match = await chechUser.checkPassword(password);
    if(!match){
        throw new APIError('Password does not match',400)
    }
    const token = chechUser.createJWT();
    res.status(201).json({msg:'Login Successful',token:token,admin:false});
}

const getUser = (req,res) => {
    res.status(200).json({
        user:req.user.username,
        email:req.user.email
    })
}

module.exports = {
    register,login,getUser
}