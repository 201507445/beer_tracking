<<<<<<< HEAD
$(".beer-review-link").on("click", function(){
    
    
    
});
$(function(){
	$('#addBeer-form').submit(function(event){
		event.preventDefault();
		$.ajax({
			url: '/beers/search/',
			data: $(this).serialize(),
			dataType:'json',
			success: function(){
				
			}
		});

	});
=======
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
    $.getJSON("http://apichallenge.canpango.com/beers", function (beer) {
        for (var i = 0; i < beer.length; i++) {
            for (var key in beer[i]) {
                //if (beer[i][key].indexOf(toSearch) !== -1) {
                  //s  results.push(beer[i]);
               // }
            }
        }
    });

>>>>>>> dfdc2800b213a116fceb9e86a95dcaf04f074c99
});