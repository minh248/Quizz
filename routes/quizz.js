var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

var data = []

router.get("/", async function (req, res) {
    data = await getData("./database/testdb.json")

    var questions = []
    for(d of data){
        // push answer randomly to answer array
        var a = d.incorrect_answers
        a.splice(Math.floor(Math.random() * Math.floor(4)),0, d.correct_answer)

        // push data to question list
        questions.push({
            question: d.question,
            answer: a
        })
    }

    for(d of questions){
        console.log(d)
    }


    res.render("quizz.ejs", {data : questions})

    // get data function
    async function getData(path) {
        const data = await fs.readFile(path, "utf8");
        return JSON.parse(data);
    }
})

router.post("/check", async function(req, res) {
    res.send(req.body)
})

module.exports = router

// get data
