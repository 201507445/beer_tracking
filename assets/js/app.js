$(document).ready(function () {
    var beer_struct = function(beer, add_page){
        var html = '<div class="col-md-3 beer '+add_page+'">';
            html += '<div class="text-center"><b class="__l">' + beer.name + '</b></div>';
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
    var last_count = 0,element_count = 0, page_increase = 0;
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
                    return page_num_struct;
                },
                active = '',
                page_num_struct = '',
                content_count = 0;
                
            $.each(beer, function(index, i){
                count++;
                if(count > 9){
                    add_page = 'hide';
                }
                $('.beer-container').append(beer_struct(i, add_page));
            });

            var content_count = Math.round(beer.length/9);                
            for(var k = 0; k < content_count; k++){
                page_num++;
                if(page_num === 1){
                    active = 'active';
                }else{
                    active = '';
                } 
                page_increase++;
                page_num_struct += '<li class="'+active+'" data-page="'+page_increase+'"><a class="page" href="javascript:void(0);">'+page_increase+'</a></li>';                                          
            }
            
            var remainder = beer.length%9;
            for(var r = 1; r <= remainder; r++){
                page_increase++;
                page_num_struct += '<li data-page="'+page_increase+'"><a class="page" href="javascript:void(0);">'+page_increase+'</a></li>';             
            }

            var elements =  $('.beer-container .beer'),
                remaining_count = 0;
            for(var count = 1; count <= content_count; count++){ 
                element_count++;               
                for(var inner_count = 0; inner_count < 9; inner_count++){                    
                    elements[remaining_count].classList.add(element_count);
                    remaining_count++;
                }
            }
            for(var remain = 1; remain <= remainder; remain++){
                element_count++;
                elements[remaining_count].classList.add(element_count);
            }
            last_count = element_count;
            $('.beer-pagination .pagination').append(paging(page_num_struct));
        }
    });

    var pages_count = $('.pagination li');
    $('body').on('click', '.beer-pagination li a', function(event){
        event.preventDefault();
        var _this = $(this),
            _parent = _this.parent(),
            _pageClass = _parent.text();
        if(_parent.hasClass('disabled')) return false;

        if(!_this.hasClass('page')) return false;

        // console.log(page_increase);
        if(_pageClass.trim() != ''){
            $('.pagination li').removeClass('active');
            _parent.addClass('active');
            $('.beer', '.beer-container').addClass('hide');
            $('.beer.'+_pageClass, '.beer-container').removeClass('hide'); 
        }
        var page_number = parseInt(_parent.attr('data-page'));
        // console.log(page_number);
        if(page_number == page_increase){
            $('.nav-beers.next','.beer-pagination').removeClass('disabled');
        }
        if(page_number === 1){
            $('.nav-beers.prev','.beer-pagination').addClass('disabled');
        }else if(page_number=== 0){
            $('.nav-beers.prev','.beer-pagination').addClass('disabled');
        }


        // console.log(_this.text());
    });


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


    $.getJSON("http://apichallenge.canpango.com/categories/", function (cat) {
        for (var i = 0; i < cat.length; i++) {
            $('#category').append('<option value="'+cat[i] +'">' + cat[i].name + '</option>');
        }
    });

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
});