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
});