var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

var data = []

router.get("/", function (req, res) {
    res.render("quizz.ejs")
})

router.post("/check", function(req, res) {
    res.render("check.ejs")
})

module.exports = router
