const APIError = require('../errors/apiError')
const Admin = require('../db/admin')
const School = require('../db/school')

const adregister = async(req,res) => {
    const {username,email,password} = req.body;
    if(!username || !email || !password || username === "" || email === "" || password === ""){
        throw new APIError('Please provide valid credentials',400);
    }
    const chechUser = await Admin.findOne({email:email})
    if(chechUser){
        throw new APIError('Email already exists',400);
    }
    const user = await Admin.create({username,email,password});
    res.status(201).json({
        username:user.username,
        email:user.email
    })
}

const adlogin = async(req, res) => {
    const {email,password} = req.body;
    if(!email || !password || email === "" || password === ""){
        throw new APIError("Please provide email and password",400);
    }
    const chechUser = await Admin.findOne({email:email});
    if(!chechUser){
        throw new APIError('Email Does not exists',400);
    }
    const match = await chechUser.checkPassword(password);
    if(!match){
        throw new APIError('Password does not match',400)
    }
    const token = chechUser.createJWT();
    res.status(201).json({msg:'Login Successful',token:token,admin:true});
}

const adgetUser = (req,res) => {
    res.status(200).json({
        user:req.user.username,
        email:req.user.email
    })
}

const createSchool = async (req, res) => {
    const {name} = req.body;

    const school = School({name});
    await school.save()

    return res.status(201).json(school);
} 


module.exports = {
    adregister,adlogin,adgetUser, createSchool
}