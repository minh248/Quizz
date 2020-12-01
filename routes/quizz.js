var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

var data = []

router.get("/", function (req, res) {
    var categoryId = req.query.categoryId
    res.render("quizz.ejs", {categoryId: categoryId})
})

router.post("/check", function(req, res) {
    pushData(req.body.q1)
    pushData(req.body.q2)
    pushData(req.body.q3)
    pushData(req.body.q4)
    pushData(req.body.q5)
    pushData(req.body.q6)
    pushData(req.body.q7)
    pushData(req.body.q8)
    pushData(req.body.q9)
    pushData(req.body.q10)
    res.render("check.ejs", {submitData: data})
})

router.get('/check', function(req, res) {
    res.render("check.ejs", {submitData: data})
});

function pushData(item){
    if(item !== null && item !== undefined){
        data.push(item)
    }
}

module.exports = router
