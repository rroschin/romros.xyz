jQuery(function ($) {

  'use strict';

  (function () {
    $('#preloader').delay(200).fadeOut('slow');
  }());
  
  (function () {
    $('.view-details').click(function(){
		const this_parent = $(this).parent();
		
		this_parent.find('.review-text').show();
		this_parent.find('.hide-details').show();
		this_parent.find('.view-details').hide();
    });
	
	$('.hide-details').click(function(){
		const this_parent = $(this).parent();
		
		this_parent.find('.review-text').hide();
		this_parent.find('.hide-details').hide();
		this_parent.find('.view-details').show();
    });
  }());

});