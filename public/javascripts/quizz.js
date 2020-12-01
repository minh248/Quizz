function onLoading(categoryId) {
    var url = "http://127.0.0.1:5000/api/v1/quizz?categoryId=" + categoryId
    alert(url)

    $.get(url, function (data, status) {
        $('.topic-ques').append("<h3>" + 'Topic Questions: ' + 'api.category' + "</h3")
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

    var x = {
        questionId: 123,
        submittedAnswer: "asdj"
    }
}