$(document).ready(function () {
    $.getJSON("http://apichallenge.canpango.com/beers", function (beer) {
        for (var i = 0; i < beer.length; i++) {
            var html = '<div class="col-md-3 beer">';
            html += '<div class="text-center"><b>' + beer[i].name + '</b></div>';
            html += '<p><b> Ibu:</b> <span>' + beer[i].ibu + '</span></p>';
            html += '<p><b>Abv:</b> <span>' + beer[i].abv + '</span></p>';
            html += '<p><b>Style:</b> <span>' + beer[i].style + '</span></p>';
            html += '<p><b>Location:</b> <span>' + beer[i].brewery_location + '</span></p>';
            html += '<p><b>Calories:</b> <span>' + beer[i].calories + '</span></p>';
            html += '<div class="beer-review-link"><a href="#">Reviews</a></div>';
            $('.beer-container').append(html);
        }
    });
  
});
  document.getElementById('addBeer-form').addEventListener('button', function (e) {
        e.preventDefault();
         var tempValue = document.querySelector('input[name="name"]').value;
            addNewItem({
                "name": tempValue
               
            });
            console.log(tempValue);
        /*var info = {};//create an empty object
        info.name = document.getElementById('name').value;
        info.ibu = document.getElementById('ibu').value;
        console.log(info.name);*/
    });