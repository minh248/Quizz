function onLoading(categoryId) {
    var url = "http://127.0.0.1:5000/api/v1/quizz?categoryId=" + categoryId
    var topic = ["Animals",
        "Art",
        "Celebrities",
        "Entertainment: Board Games",
        "Entertainment: Books",
        "Entertainment: Cartoon & Animations",
        "Entertainment: Comics",
        "Entertainment: Film",
        "Entertainment: Japanese Anime & Manga",
        "Entertainment: Music",
        "Entertainment: Musicals & Theatres",
        "Entertainment: Television",
        "Entertainment: Video Games",
        "General Knowledge",
        "Geography",
        "History",
        "Mythology",
        "Politics",
        "Science & Nature",
        "Science: Computers",
        "Science: Gadgets",
        "Science: Mathematics",
        "Sports",
        "Vehicles"
    ]

    $.get(url, function (data, status) {
        $('.topic-ques').append("<h3>" + "Topic Questions: " + topic[categoryId - 1] + "</h3")
        var i = 0
        for(d of data){
            i ++
            $("#quizz").append(
                "<div class='question'>" +
                "<b>" + d.question +"</b>" +
                renderAnswer() +
                "</div?")

            function renderAnswer() {
                var r = ""
                for(a of d.answers){
                    r += "<p><input type='radio' name='q"+i+"' value='"+getJsonData(d, a)+"'>"+a+"</p>"
                }
                return r
            }

            function getJsonData(d, a) {
                var data = {
                    questionId : d.questionId,
                    submittedAnswer: a
                }
                return JSON.stringify(data)
            }
        }
        $("#quizz").append("<button class='btn' value='Submit'> Submit </button>")
    })
}

function validateForm() {
    for (var i = 1; i <= 10; i++) {
        if ($("input[name=q" + i + "]:checked").val() === undefined) {
            alert("Please select all answers")
            return false
        }
    }
    return true
}