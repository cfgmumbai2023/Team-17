const express = require('express');
const router = express.Router();
const {register,login,getUser} = require('../controllers/users')
const authHandler = require('../middleware/authHandler')

router.get('/',authHandler,getUser)

router.post('/register',register)

router.post('/login',login)

module.exports = router;