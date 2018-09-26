<div class="modal fade _review_modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    	<div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;</button>
            <div class="">Beer: <span>Reviews</span></div>
        </div>
        <div class="modal-body">
	        <div class="_modal_loader"><img height="25" src="<?=base_url('assets/img/loading.gif')?>"></div>
	        <div class="row _modal_content hide">
	        	<div class="col-md-12">
	        		<div class="modal_reviews text-center">
	        			<h1>Reviews</h1>
	        		</div>
	        		<div class="modal_add_review hide">
	        			<div>
	        				<form action="" method="post" id="beer-review-form">
	        					<textarea class="form-control" required="1" placeholder="Write your review" name="review"></textarea>
	        					<input type="hidden" name="url" class="modal_url" value="">
	        					<input name="name" type="hidden" class="modal_name">
	        					<input name="ibu" type="hidden" class="modal_ibu">
	        					<input name="brewery_location" type="hidden" class="modal_brewery_location">
	        					<input name="abv" type="hidden" class="modal_abv">
	        					<input name="style" type="hidden" class="modal_style">
	        					<input name="category" type="hidden" class="modal_category">
	        					<input name="calories" type="hidden" class="modal_calories">
	        				</form>
	        			</div>
	        		</div>
	        		<div class="modal_edit hide">
		        		<form action="" method="post" id="modal_edit_form">
		        			<div class="row">
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_name">Beer Name</label>
	                                <input name="name" required="1" class="form-control modal_name" type="text" placeholder="Enter name of beer">
	                            </div>
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_ibu">Ibu</label>
	                                <input name="ibu" required="1" class="form-control modal_ibu" type="text" placeholder="Enter Ibu">
	                            </div>
	                        </div>
		                    <div class="row">
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_abv">Abv</label>
	                                <input name="abv" required="1" class="form-control modal_abv" type="text" placeholder="Enter Ibv">
	                            </div>
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_brewery_location">Brewery Location</label>
	                                <input name="brewery_location" required="1" class="form-control modal_brewery_location" type="text" placeholder="Brewery Location">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_category">Category</label>
	                                <select required="1" name="category" id="modal_category" class="form-control category">
	                                    <option value="">Select beer category</option>
	                                </select>
	                            </div>
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_style">Style</label>
	                                <input name="style" required="1" class="form-control modal_style" type="text" placeholder="Beer style">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-md-6 col-xs-12">
	                                <label for="modal_calories">Calories</label>
	                               <input name="calories" required="1" value="1" class="form-control modal_calories" type="number" placeholder="Calories in the beer">
	                            </div>
	                            <div class="col-md-6 col-xs-12">
	                                <input type="hidden" name="url" class="modal_url" value="">
	                            </div>
	                        </div>
		        		</form>
		        	</div>
	        	</div>
	        </div>
        </div>
        <div class="modal-footer hide">
        	<button type="button" class="btn btn-default pull-left __modal_edit" data-drl="forward">Edit Beer</button>
		    <button type="button" class="btn btn-primary __modal_add_review" data-action="add-review">Add Review</button>
		    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> -->
        </div>
    </div>
  </div>
</div>