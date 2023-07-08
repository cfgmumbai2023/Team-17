const express = require('express');
const router = express.Router();
const authHandler = require('../middleware/authHandler')

const {createGroup,getGroups,deleteGroup,addStudent} = require('../controllers/group')

router.post('/createGroup',authHandler,createGroup)

router.get('/getGroups',authHandler,getGroups)

router.delete('/deleteGroup',authHandler,deleteGroup)

router.post('/addStudent',authHandler, addStudent)

module.exports = router;