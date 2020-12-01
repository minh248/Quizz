function check() {
    var c = 0;
    var q1 = document.quizz.animals1.value;
    var q2 = document.quizz.animals2.value;
    if (q1 == "The wild kittens of domestic cats who have never lived with humans.") { c++ }
    if (q2 == "All of these") { c++ }
    document.write(c);
}

var mockApiUrl = 'https://5fbfb63cfd14be0016748f86.mockapi.io/api/v1/quizz'
var catergoryUrl = 'http://127.0.0.1:5000/category'

$(document).ready(function () {
    $.get(catergoryUrl, function (data, status) {
        console.log(1)

        for (cgr of data) {
            $('#main-topics--quizzes--list').append("<div class ='topic-list'>" + "<ul>" +
                "<li>" + "<a href ='quizz?categoryId='" + cgr.categoryId +">" + cgr.category + "</a>" +
                "</li>" +
                "</ul>" +
                "</div>")
        }
    })
})