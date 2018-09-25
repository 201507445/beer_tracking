$(document).ready(function () {
    var toSearch = {};
    $.getJSON("http://apichallenge.canpango.com/categories/", function (cat) {
        for (var i = 0; i < cat.length; i++) {
            var category = cat[i].url.split('/'),
                category_id = category[4];
            $('#cat').append('<li><a href="?category=' + category_id + '">' + cat[i].name + '</a></li>');
        }
    });
    $.getJSON("http://apichallenge.canpango.com/beers", function (beer) {
        for (var i = 0; i < beer.length; i++) {
            for (var key in beer[i]) {
                //if (beer[i][key].indexOf(toSearch) !== -1) {
                  //s  results.push(beer[i]);
               // }
            }
        }
    });

    $(".beer-review-link").on("click", function(){
    
    
    
	});
});