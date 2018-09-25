$(document).ready(function () {
    $.getJSON("http://apichallenge.canpango.com/categories/", function (cat) {
        for (var i = 0; i < cat.length; i++) {
            $('#cat').append('<li><a href="' + cat[i] + '">' + cat[i].name + '</a></li>');
        }
    });
    /*$(".beer-review-link").on("click", function (e) {

        $('#myModal').modal('show');

    });*/
    $('#searchField').keyup(function () {
        var input, filter, ul, li, a, i, count = 0;
        input = $(this);
        filter = input.val().toUpperCase();
        container = $(".beer-container");
        beer = container.find('div.beer');
        if (beer.length !== 0) {
            // Loop through all list items, and hide those who don't match the search query

            for (i = 0; i < beer.length; i++) {
                a = beer[i].getElementsByClassName("__l")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    beer[i].style.display = "";
                    count++;
                } else {
                    beer[i].style.display = "none";
                }
            }
            if (count === 0) {
                if (container.find('._cLno_r').length === 0) {
                    container.prepend('<div class="row _cLno_r">' +
                            '<ul><li class="no-info">No results</li></ul></div>');
                }
            } else {
                container.find('._cLno_r').remove();
            }
        }

    });
});