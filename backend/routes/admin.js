const express = require('express');
const router = express.Router();
const {adregister,adlogin,adgetUser,createSchool, createTeacher} = require('../controllers/admin')
const authHandler = require('../middleware/authHandler')

router.get('/',authHandler,adgetUser)

router.post('/register',adregister)

router.post('/login',adlogin)

router.post('/createSchool',authHandler,createSchool)

router.post('/createTeacher',authHandler,createTeacher)

// router.post('/addTeacher',authHandler,addTeacher)

module.exports = router;