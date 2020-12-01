var mockUrl = "https://5fc47e2136bc790016343947.mockapi.io/api/v1/checkans"
var ApiUrl = "http://127.0.0.1:5000/api/v1/quizz/check"

function onLoading(submitData) {
    console.log(typeof submitData)

    $.post(ApiUrl, JSON.stringify(submitData), function (data, status) {
        for (d of data) {
            $('.check-anw').append("<div class='answer'>" +
                "<p>" + d.question + "</p>" +
                "<br>" +
                "<b>" + 'Correct Answer: ' + "<font color='green'>" + d.correctAnswer + "</font>" + "</b>" +
                "<br>" + "<br>" + "</div>")
        }
        if(data.length <= 10){
            var total = 10 - data.length
            $('.sum-correct').append("<b>" + 'Total Correct: ' + "</b>" + "<b>" + total + "/10 </b>")
        }
    })
}
