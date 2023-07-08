const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bmcschool: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  disability: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ["Mild", "Moderate", "Severe"],
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  doa: {
    type: Date,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
  standard: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
