const APIError = require('../errors/apiError')
const Group = require('../db/group')

const createGroup = async(req,res) => {
    const {objective} = req.body;
    if(!objective){
        throw new APIError("Please provide Group Objective",400);
    }

    const group = await Group.create({objective: objective,teacher:req.user.id});
    console.log(group);
    return res.status(201).json(group)
}

const getGroups = async (req, res) => {
    const id = req.user.id;
    const groups = await Group.find({teacher:id}).populate('students');
    return res.status(200).json(groups)
}

const deleteGroup = async (req, res) => {
    const id = req.params.id;
    const del = await Group.findByIdAndDelete(id);
    return res.status(200).json({
        "msg":"Group Deleted"
    })
}

const addStudent = async (req, res) => {
    const {ids} = req.body;
    const groupId = req.params.gid;
    const group = await Group.findById(groupId);

    ids.forEach((ele) => {
        group.students.push(ele);
    })
    await group.save();

    return res.status(200).json(group)
}

module.exports = {
    createGroup,getGroups,deleteGroup,addStudent,
}