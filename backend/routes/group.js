const express = require('express');
const router = express.Router();
const authHandler = require('../middleware/authHandler')

const {createGroup,getGroups,deleteGroup,addStudent} = require('../controllers/group')

router.post('/createGroup',authHandler,createGroup)

router.get('/getGroups',authHandler,getGroups)

router.delete('/deleteGroup/:id',authHandler,deleteGroup)

router.post('/addStudent/:gid',authHandler, addStudent)

module.exports = router;