const express = require("express");
const router = express.Router();
const Evaluation = require("../db/evaluation")
const authHandler = require("../middleware/authHandler")


router.post("/createevaluation/:id",authHandler, async (req, res) => {
    const evaluationId = req.params.id;
    const { quarter, year, totalscore, parameters } = req.body;
    const evaluation = await Evaluation.findById(evaluationId);

    try {
        await Evaluation.create({
            quarter: quarter,
            year: year,
            totalscore: totalscore,
            parameters: parameters,
            student: evaluationId

        })
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})

router.get("/showevaluation/:id",authHandler, async (req, res) => {
    const evaluationId = req.params.id;
    const evaluation = await Evaluation.findById(evaluationId);
    if (!evaluation) {
        return res.status(404).json({ error: 'Evaluation not found.' });
    }
    // try {
        res.json(evaluation);
        
    // } catch (error) {
    //     console.log(error);
    //     res.json({ success: false });
    // }
})

module.exports = router