$(document).ready(function () {
    $.getJSON("http://apichallenge.canpango.com/beers", function (data) {
        for (key in data) {
            console.log(data[key].name);
        }
    });


});