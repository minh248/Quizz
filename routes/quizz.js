var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

var data = []

router.get("/", function (req, res) {
    var categoryId = req.query.categoryId
    res.render("quizz.ejs", {categoryId: categoryId})
})

router.post("/check", function(req, res) {
    console.log(req.body)
    res.render("check.ejs", {submitData: data})
})

router.get('/check', function(req, res) {
    res.render("check.ejs", {submitData: data})
});

module.exports = router
