var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

var submitData = {minh: 1}

router.get("/", function (req, res) {
    var categoryId = req.query.categoryId
    res.render("quizz.ejs", {categoryId: categoryId})
})

router.post("/check", function(req, res) {
    res.render("check.ejs", {submitData: submitData})
})

router.get('/check', function(req, res) {
    res.render("check.ejs", {submitData: submitData})
});

module.exports = router
