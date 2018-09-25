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
    load_beers();
    var page_increase = 0;
    function load_beers(){
        var location = window.location,
        category = location.search,
        category_id = 0,
        url = "http://apichallenge.canpango.com/beers/", data = {}, query = '';
        category = category.replace('?', '').split('=');
        query = category[0];
        
        if(category.length > 1){
            
            category = category[1].split('&');
            category_id = (category[0] !== undefined && category[0].length !== 0)? category[0]:0;
            if(query == 'q' && category_id !== 0){
                url = "http://apichallenge.canpango.com/beers/search/";
                data = {
                    q: decodeURI(category_id) 
                };
            }
            
        }    

        $.ajax({
            url: url,
            dataType: 'json',
            data: data,
            error: function(){
                $('.beer-container').html('<div class="col-md-12 no-beers"><h2>Someting went wrong, try again</h2>'+
                                        '<div class="text-center"><a class="page-reload" href="'+location.href+'">Reload page</a></div>'+
                                        '</div>');
            },
            beforeSend: function(){
                $('.beer-pagination ul li').addClass('disabled');
                for(var i = 0; i <= 5; i++){
                    $('.beer-container').append(beer_placeholder());
                }
            },
            success: function(beer){
                $('.beer-container').html('');
                // Display 5 beers per page
                var count = 0, add_page = '', page_num = 0,
                    paging = function(page_num_struct, count){
                        return '<li class="disabled prev"><a href="#" class="paging-btn" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'+
                                page_num_struct+
                                '<li class="next '+((count === 1)?'disabled':'')+'"><a href="#" class="paging-btn" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
                    },
                    active = '',
                    page_num_struct = '',
                    content_count = 0,
                    beer_count = 0,
                    category_url = '';
                $.each(beer, function(index, i){
                    
                    var search_c = 0;
                    if(query == 'category'){
                        search_c = 1;
                    }
                    if(search_c !== 0){
                        category_url = "http://apichallenge.canpango.com/category/"+category_id+'/';
                        if(i.category == category_url){
                            beer_count++;
                            if(beer_count > 9){
                                add_page = 'hide';
                            }
                            $('.beer-container').append(beer_struct(i, add_page));
                        }
                    }else{
                        beer_count++;
                        if(beer_count > 9){
                            add_page = 'hide';
                        }
                        $('.beer-container').append(beer_struct(i, add_page));
                    }
                });

                if(beer_count === 0){
                    var base_link = '';
                    if(category_id!== 0){
                        base_link = '<div class="text-center"><a href="./">Remove filter</a></div>';
                    }
                    var html = '<div class="col-md-12 no-beers"><h2>No beers found</h2>'+base_link+'</div>';
                    $('.beer-container').html(html);
                }

                // Pagination
                var content_count = Math.floor(beer_count/9),
                    remainder = beer_count%9;
                if(beer_count <= 9){
                    page_increase++;
                    page_num_struct += '<li class="active" data-page="'+page_increase+'"><a class="page" href="javascript:void(0);">'+page_increase+'</a></li>';
                }else{
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
                    var remainder_count = 1;
                    if(remainder <= 9){
                        remainder_count = 1;
                    }
                    for(var r = 1; r <= remainder_count; r++){
                        page_increase++;
                        page_num_struct += '<li data-page="'+page_increase+'"><a class="page" href="javascript:void(0);">'+page_increase+'</a></li>';             
                    }

                    var elements =  $('.beer-container .beer'),
                        remaining_count = 0, last_count = 0,element_count = 0;
                    for(var count = 1; count <= content_count; count++){ 
                        element_count++;               
                        for(var inner_count = 0; inner_count < 9; inner_count++){  
                            if(elements[remaining_count] != undefined){
                                elements[remaining_count].classList.add(element_count);
                                remaining_count++;
                            }
                        }
                    }
                    element_count++;
                    for(var remain = 1; remain <= remainder; remain++){
                        if(elements[remaining_count] != undefined){
                            elements[remaining_count].classList.add(element_count);
                            remaining_count++;
                        }
                    }
                }                               
                $('.beer-pagination .pagination').append(paging(page_num_struct, page_increase));
            }
        });
    }

    $('body').on('click', '.page-reload', function(event){
        event.preventDefault();
        $('.no-beers').remove();
        load_beers();
    });

    $('body').on('click', '.beer-pagination li a', function(event){
        event.preventDefault();
        var _this = $(this),
            _parent = _this.parent(),
            _pageClass = _parent.text(),
            _prev = $('.pagination .prev'),
            _next = $('.pagination .next');
        if(_parent.hasClass('disabled')) return false;

        if(!_this.hasClass('page')) return false;

        if(_pageClass.trim() != ''){
            $('.pagination li').removeClass('active');
            _parent.addClass('active');
            $('.beer', '.beer-container').addClass('hide');
            $('.beer.'+_pageClass, '.beer-container').removeClass('hide'); 
        }
        var page_number = parseInt(_parent.attr('data-page'));
        if(page_number == page_increase){
            _next.addClass('disabled');
            _prev.removeClass('disabled');
        }else if(page_number === 1){
            _prev.addClass('disabled');
            _next.removeClass('disabled');
        }else{
            _next.removeClass('disabled');
            _prev.removeClass('disabled');
        }
    });

    $('body').on('click', '.beer-pagination .paging-btn', function(event){
        event.preventDefault();
        var _this = $(this),
            _parent = _this.parent(),
            _prev = $('.pagination .prev'),
            _next = $('.pagination .next');
        if(_parent.hasClass('disabled')) return false;

        // Find active element

        var active_element = $('.pagination li.active', '.beer-pagination');
        if(_parent.hasClass('prev')){
            active_element.prev().find('a').click();
        }else if(_parent.hasClass('next')){
            active_element.next().find('a').click();
        }        
    });


    $('#search-form').submit(function (event) {
        event.preventDefault();
        var val = $(this).find('#searchField').val();
        if(val.length === 0) return false;
        
        window.location.replace('?q='+val);        

    });

    var validate = function(){
        var form = $('#addBeer-form'),
            name = $('#name').val(),
            abv = $('#abv').val(),
            brewery_location = $('#brewery_location').val(),
            category = $('#category').val(),
            style = $('#style').val(),
            calories = $('#calories').val(),
            ibu = $('#ibu').val(),
            results = false;

            if(name.length!==0
                && abv.length !== 0
                && brewery_location.length !== 0
                && category.length !== 0
                && style.length !== 0
                && calories.length !== 0
                && ibu.length !== 0
                ){
                results = true;
            }

            return results;
    };
    
    $('#addBeer-form').submit(function(event){
        event.preventDefault();
        if(validate()){
            $('.form-error').html('');
            alertify.set('notifier','position', 'top-right');
            $.ajax({
                url: 'http://apichallenge.canpango.com/beers/',
                data: $(this).serialize(),
                type: 'post',
                dataType:'json',
                error: function(index, txt, s){
                    var response = 'Something went wrong, please try again';
                    console.log(index);
                    if(index.status == 400){
                        response = index.responseJSON.name[0];
                    }
                    var not = alertify.error(response);
                    $('.addBeer-bottom button').removeClass('disabled').attr('disabled', false);
                },
                beforeSend: function(){
                    $('.addBeer-bottom button').addClass('disabled').attr('disabled', true);
                },
                success: function(r){
                    console.log(r);
                    $('.addBeer-bottom button').removeClass('disabled').attr('disabled', false);
                    var not = alertify.success('New beer has been added');
                    $('#addBeer-form')[0].reset();
                }
            });  
        }else{
            var not = alertify.notify('Please fill fields', 'failure', 5, function(){  console.log('dismissed'); });
        }
        

    });
});