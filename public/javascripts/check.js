function onLoading(submitData) {
    console.log(submitData)

    $.get('https://5fc47e2136bc790016343947.mockapi.io/api/v1/checkans', function (data, status) {
        for (checks of data) {
            $('.check-anw').append("<div class='answer'>" +
                "<p>" + checks.question + "</p>" +
                "<br>" +
                "<b>" + 'Correct Answer: ' + "<font color='green'>" + checks.correctAns + "</font>" + "</b>" +
                "<br>" + "<br>" + "</div>")
        }
        if(data.length <= 10){
            var total = 10 - data.length
            $('.sum-correct').append("<b>" + 'Total Correct: ' + "</b>" + "<b>" + total + "/10 </b>")
        }
    })
}
