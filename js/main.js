;(function($){
	$(document).ready(function(){
	var $prev = $('.ba-team-slider .slick-prev'),
		$next = $('.ba-team-slider .slick-next');

	$('.ba-team-slider').slick({
		dots:true,
		infinite:false,
		slide:'.ba-team-slider__slide',
		prevArrow:$prev,
		nextArrow:$next

	});

});



})(jQuery);
