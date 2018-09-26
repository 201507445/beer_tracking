$(document).ready(function () {
    cateLoader();
    function cateLoader(){
        $.ajax({
            url: "http://apichallenge.canpango.com/categories/",
            dataType: 'json',
            error: function(){
                $('#cat').html('<li class="no-cate">Unable to load categories<br><a href="./">Reload</a></li>');
            },
            success: function(cat){
                $('.category').html('');
                $('#cat').html('');
                for (var i = 0; i < cat.length; i++) {
                    var category = cat[i].url.split('/'),
                        category_id = category[4];
                    $('#cat').append('<li><a href="?category=' + category_id + '&cname='+cat[i].name+'">' + cat[i].name + '</a></li>');
                    
                    $('.category').append('<option value="'+ cat[i].url +'">' + cat[i].name + '</option>');
                }
            }
        });
    }
    $('body').on('click', '.no-cate a', function (e) {
        e.preventDefault();
        cateLoader();
    }); 
    $('body').on('click', '.beer-review-link a', function (e) {
        e.preventDefault();
        var _url = $(this).attr('data-src'),
            _modal = $('._review_modal'),
            _name = $(this).find('.__l').text();
        _modal.find('.modal-header > div > span').html(_name);
        _modal.modal('show');
        $.ajax({
            url: _url,
            dataType: 'json',
            success: function(r){
                $('._modal_content, .modal-footer').removeClass('hide');
                $('._modal_loader').addClass('hide');
                _modal.attr('data-src', r.url);
                _modal.find('.modal_name').val(r.name);
                _modal.find('.modal_ibu').val(r.ibu);
                _modal.find('.modal_abv').val(r.abv);
                _modal.find('.modal_style').val(r.style);
                _modal.find('.modal_calories').val(r.calories);
                _modal.find('.modal_brewery_location').val(r.brewery_location);
                _modal.find('.modal_url').val(r.url);
                _modal.find('.modal_category').val(r.category);
                $('#modal_category').find('option').each(function(){
                    var val = $(this).val();
                    if(val == r.category){
                        $(this).attr('selected', true);
                    }
                });
            }
        });
        
    });
    
    $('._review_modal').on('hidden.bs.modal', function(){
        $('.modal_edit, .modal_add_review', '._review_modal').addClass('hide');
        $('.modal_reviews', '._review_modal').removeClass('hide');
        $('.__modal_edit', '._review_modal').attr('data-drl', 'forward').html('Edit Beer');
        $('.__modal_add_review', '._review_modal').attr('data-action', 'add-review').html('Add Review');
        $('._modal_content, .modal-footer').addClass('hide');
        $('._modal_loader').removeClass('hide');
        $('#beer-review-form')[0].reset();
    });
});