var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

var data = []

router.get("/", function (req, res) {
    var categoryId = req.query.categoryId
    res.render("quizz.ejs", {categoryId: categoryId})
})

router.post("/check", function(req, res) {
    data = []
    console.log(req.body.q1)
    console.log(typeof req.body.q1)

    pushData(JSON.parse(req.body.q1))
    pushData(JSON.parse(req.body.q2))
    pushData(JSON.parse(req.body.q3))
    pushData(JSON.parse(req.body.q4))
    pushData(JSON.parse(req.body.q5))
    pushData(JSON.parse(req.body.q6))
    pushData(JSON.parse(req.body.q7))
    pushData(JSON.parse(req.body.q8))
    pushData(JSON.parse(req.body.q9))
    pushData(JSON.parse(req.body.q10))
    res.render("check.ejs", {submitData: data})
})

router.get('/check', function(req, res) {
    res.render("check.ejs", {submitData: data})
});

function pushData(item){
    if(item !== null && item !== undefined){
        data.push(item)
    } else{
        data.push(JSON.stringify({QuestionId:0, submittedAnswer:"emty submit answer"}))
    }
}

module.exports = router
