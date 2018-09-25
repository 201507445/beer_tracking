$(document).ready(function () {
    var toSearch = {};
    $.getJSON("http://apichallenge.canpango.com/categories/", function (cat) {
        for (var i = 0; i < cat.length; i++) {
            //console.log(cat[i].url);
            toSearch.url = cat[i].url;
            toSearch.name = cat[i].name;
            $('#cat').append('<li><a href="' + cat[i].url + '">' + cat[i].name + '</a></li>');
        }
        console.log(toSearch);
    });
    $('body').on('click', '.beer-review-link', function (e) {

        $('#myModal').modal('show');



    });
});