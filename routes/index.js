var express = require('express');
var router = express.Router();


const catergories = [
    "Animals",
    "Brain Teasers",
    "Celebrities",
    "Entertainment"
]
const catergories2 = {
    Animals: [
        "Cats",
        "Invertebrates",
        "Dogs",
        "Reptiles and Amphibians",
        "Fish",
        "Wild Birds",
        "Horses",
        "Wild Mammals",
        "Other Domestic Animals"
    ],
    BrainTeasers: [
        "Fractured Words",
        "Logic Puzzles",
        "Numbers and Patterns",
        "Riddles",
        "Word Play",
        "Wordwise"
    ],
    Celebrities: [
        "Celebrities A-B",
        "Celebrities C-D",
        "Celebrities E-G",
        "Celebrities H-J",
        "Celebrities K-L",
        "Celebrities M-P",
        "Celebrities Q-S",
        "Celebrities T-Z",
        "Celebrities Mixture"
    ],
    Entertainment: [
        "Beauty Accessories & Fashion",
        "Beauty Pageants",
        "Casinos & Gambling",
        "Circuses & Fairs",
        "Comics",
        "Coasters & Theme Parks",
        "Fashion, Models & Designers",
        "Pro Wrestling",
        "Radio",
        "TV & Movies Mixture",
        "Entertainment by Decade",
        "Entertainment by Themes",
        "Entertainment Grab Bag",
        "Entertainment Other",
        "Entertainment Word Play",
        "Fractured Entertainment",
        "Las Vegas",
        "QCNs for Entertainment"
    ]
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.ejs', {titles: catergories});
});

module.exports = router;



