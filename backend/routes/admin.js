const express = require('express');
const router = express.Router();
const {adregister,adlogin,adgetUser} = require('../controllers/admin')
const authHandler = require('../middleware/authHandler')

router.get('/',authHandler,adgetUser)

router.post('/register',adregister)

router.post('/login',adlogin)

module.exports = router;