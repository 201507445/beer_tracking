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
                $('#category').html('');
                $('#cat').html('');
                for (var i = 0; i < cat.length; i++) {
                    var category = cat[i].url.split('/'),
                        category_id = category[4];
                    $('#cat').append('<li><a href="?category=' + category_id + '&cname='+cat[i].name+'">' + cat[i].name + '</a></li>');
                    
                    $('#category').append('<option value="'+ cat[i].url +'">' + cat[i].name + '</option>');
                }
            }
        });
    }
    $('body').on('click', '.no-cate a', function (e) {
        e.preventDefault();
        cateLoader();
    }); 
    $('body').on('click', '.beer-review-link', function (e) {

        $('#myModal').modal('show');



    });
});