function onLoading(categoryId) {
    var url = "http://127.0.0.1:5000/api/v1/quizz?categoryId=" + categoryId
    alert(url)

    $.get(url, function (data, status) {
        for(d of data){
            $("#quizz").append(
                "<div class='quizz--multiplechoice'>" +
                "<p>" + d.question +"</p>" +
                renderAnswer() +
                "</div?")

            function renderAnswer() {
                var r = ""
                for(a of d.answers){
                    r += "<p><input type='radio' name='animals2' value='" + a +"'>" + a + "</p>"
                }
                return r
            }
        }
        $("#quizz").append("<button class='btn' value='Submit'> Submit </button>")
    })
}