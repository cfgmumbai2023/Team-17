const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    quarter: {
        type: String,
        enum : ['Q1','Q2','Q3','Q4'],
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    totalscore: {
        type: Number,
        required: true,
    },
    parameters: [
        {
            name: {
                type: String,
                required: true,
            },
            score : {
                type: Number,
                required: true,
            },
        }
    ]
});

const Evaluation = mongoose.model("evaluation", EvaluationSchema);
module.exports = Evaluation;
