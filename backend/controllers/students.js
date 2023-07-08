const APIError = require("../errors/apiError");
const Teacher = require("../db/teacher");
const Student = require("../db/student");

const registerStudent = async (req, res, next) => {
  const {
    name,
    bmcschool,
    age,
    disability,
    severity,
    program,
    level,
    gender,
    dob,
    doa,
    udid,
    aadhar,
    contact,
    school,
    standard,
    teacher,
  } = req.body;
  const student = await Student.create({
    name,
    bmcschool,
    age,
    disability,
    severity,
    program,
    level,
    gender,
    dob,
    doa,
    udid,
    aadhar,
    contact,
    school,
    standard,
    teacher,
  });
  res.status(201).json({
    success: true,
    student,
  });
};

const updateStudent = async (req, res, next) => {
  const {
    name,
    bmcschool,
    age,
    disability,
    severity,
    program,
    level,
    gender,
    dob,
    doa,
    udid,
    aadhar,
    contact,
    school,
    standard,
    teacher,
  } = req.body;

  const id = req.params.id;
  const student = await Student.findByIdAndUpdate(id, req.body);

  res.status(201).json({
    success: true,
    student,
  });
};

module.exports = { registerStudent, updateStudent };
