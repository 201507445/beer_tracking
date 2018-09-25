$(document).ready(function () {
    var beer_struct = function(beer, add_page){
        var html = '<div class="col-md-3 beer '+add_page+'">';
            html += '<div class="text-center"><b>' + beer.name + '</b></div>';
            html += '<p><b> Ibu:</b> <span>' + beer.ibu + '</span></p>';
            html += '<p><b>Abv:</b> <span>' + beer.abv + '</span></p>';
            html += '<p><b>Style:</b> <span>' + beer.style + '</span></p>';
            html += '<p><b>Location:</b> <span>' + beer.brewery_location + '</span></p>';
            html += '<p><b>Calories:</b> <span>' + beer.calories + '</span></p>';
            html += '<div class="beer-review-link"><a href="#">Reviews</a></div>';
        return html;
    },
    beer_placeholder = function(){
        return '<div class="col-md-3 beer beer-placeholder"></div>';
    };

    $.ajax({
        url: "http://apichallenge.canpango.com/beers",
        dataType: 'json',
        beforeSend: function(){
            $('.beer-pagination ul li').addClass('disabled');
            for(var i = 0; i <= 5; i++){
                $('.beer-container').append(beer_placeholder());
            }
        },
        success: function(beer){
            // console.log(beer);
            $('.beer-container').html('');
            // Display 5 beers per page
            var count = 0, add_page = '', page_num = 0,
                paging = function(page_num_struct){
                    return '<li><a href="#" aria-label="Previous">'+
                            '<span aria-hidden="true">&laquo;</span></a>'+
                            page_num_struct+
                            '<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>'+
                            '</li>';
                },
                active = '',
                page_num_struct = '',
                content_count = 0,
                page_count = 0,
                page_naming = 0;
                
            $.each(beer, function(index, i){
                count++;
                page_naming++;
                if(count > 9){
                    add_page = 'hide';
                }       
                $('.beer-container').append(beer_struct(i, add_page));
            });

            var content_count = Math.round(beer.length/9),
                page_increase = 0,
                elements =  $('.beer-container .beer');           
            for(var k = 0; k < content_count; k++){
                page_num++;
                if(page_num === 1){
                    active = 'active';
                }else{
                    active = '';
                } 
                page_increase++;
                page_num_struct += '<li class="'+active+'"><a href="javascript:void(0);">'+page_increase+'</a></li>';                                          
            }
            
            var remainder = content_count%9;
            for(var r = 1; r < remainder; r++){
                page_increase++;
                page_num_struct += '<li><a href="javascript:void(0);">'+page_increase+'</a></li>'; 
                $('.beer-container .beer').addClass(""+page_increase+"");               
            }
            $('.beer-pagination .pagination').append(paging(page_num_struct));
        }
    });


    $('.beer-pagination li a').click(function(event){
        event.preventDefault();
    });

 //    $.ajax({
	//     url: 'home/index',
	//     method: 'POST',
	//     data: $('#addBeer-form').serialize(),
	//     success: function (data) {
	//         console.log(data);
	//     }
	// });

    $.getJSON("http://apichallenge.canpango.com/categories/", function (cat) {
        for (var i = 0; i < cat.length; i++) {
            var html = '';
            html += '<option value="'+cat[i] +'">' + cat[i].name + '</option>';
            $('#category').append(html);
        }
    });
});