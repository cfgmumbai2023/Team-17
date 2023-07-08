const express = require('express');
const router = express.Router();

const {registerStudent, updateStudent, getStudent, deleteStudent} = require('../controllers/students')

const authHandler = require('../middleware/authHandler')

router.post('/registerStudent',authHandler, registerStudent)

router.post('/updateStudent',authHandler, updateStudent)

router.get('/getStudent',authHandler, getStudent)

router.delete('/deleteStudent',authHandler, deleteStudent)

module.exports = router;