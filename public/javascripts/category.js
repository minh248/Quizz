var mockApiUrl = 'https://5fbfb63cfd14be0016748f86.mockapi.io/api/v1/quizz'
var catergoryUrl = 'http://127.0.0.1:5000/api/v1/category'

$(document).ready(function () {
    $.get(catergoryUrl, function (data, status) {
        for (cgr of data) {
            $('#main-topics--quizzes--list').append("<div class ='topic-list'>" + "<ul>" +
                "<li>" + "<a href ='/quizz?categoryId="+ cgr.categoryId.toString() +"'>" + cgr.category + "" +
                "</li>" +
                "</ul>" +
                "</div>")
        }
    })
})