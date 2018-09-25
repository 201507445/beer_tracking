$(document).ready(function () {
    var toSearch = {};
    $.getJSON("http://apichallenge.canpango.com/categories/", function (cat) {
        for (var i = 0; i < cat.length; i++) {
            var category = cat[i].url.split('/'),
                category_id = category[4];
            $('#cat').append('<li><a href="?category=' + category_id + '">' + cat[i].name + '</a></li>');
        }
    });
    $('body').on('click', '.beer-review-link', function (e) {

        $('#myModal').modal('show');



    });
});