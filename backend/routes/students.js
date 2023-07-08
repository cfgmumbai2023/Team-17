const express = require('express');
const router = express.Router();

const {registerStudent, updateStudent, getStudent, deleteStudent} = require('../controllers/students')

const authHandler = require('../middleware/authHandler')

router.post('/registerStudent',authHandler, registerStudent)

router.post('/updateStudent/:id',authHandler, updateStudent)

router.get('/getStudent/:id',authHandler, getStudent)

router.delete('/deleteStudent/:id',authHandler, deleteStudent)

module.exports = router;