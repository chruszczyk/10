
$(function(){
	var carouselList = $('#carousel ul');

	function changeSlides(movement) {
		if (movement === 'left') {
			carouselList.animate({'marginLeft':600}, 500, moveLastSlide);
		}
		if (movement === 'right') {
			carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
		}

		function moveFirstSlide() {
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}
		
		function moveLastSlide() {
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			firstItem.before(lastItem);
			carouselList.css({marginLeft:0});
		}
	}

	$('.left').on('click', function() {
		changeSlides('left');
	});

	$('.right').on('click', function() {
       	changeSlides('right');
	});

});
