$(document).ready(function () {
    $.getJSON("http://apichallenge.canpango.com/beers", function (data) {

        for (var i = 0; i < data.length; i++) {
            var html = '<div class="text-center"><b>' + data[i].name + '</b></div>';
            html += '<p><b> Ibu:</b> <span>' + data[i].ibu + '</span></p>';
            html += '<p><b>Abv:</b> <span>' + data[i].abv + '</span></p>';
            html += '<p><b>Style:</b> <span>' + data[i].style + '</span></p>';
            html += '<p><b>Location:</b> <span>' + data[i].brewery_location + '</span></p>';
            html += '<div class="beer-review-link"><a href="#">Reviews</a></div>';
            $('.beer').append(html);
        }
        
    });
});
