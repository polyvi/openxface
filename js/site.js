(function($) {
	$(document).ready(function(){
		var headings = $("#main-content h1, #main-content h2, #main-content h3");

		$.each(headings, function (index, heading) {
			headings[index] = $(heading);
		});

		$(window).scroll(function(){
			if (headings.length < 2) 
				return true;

			var scrolltop = $(window).scrollTop() || 0;
			if (scrolltop < (headings.get(1).offset().top + 15)) {
				$(".current-section").css({"opacity":0,"visibility":"hidden"});
				return false;
			}

			$(".current-section").css({"opacity":1,"visibility":"visible"});
			$.each(headings, function (index, value) {
				if (scrolltop >= (value.offset().top + 15)) {
					$(".current-section .name").text(value.text());					
				}
			});
		});

		$(".current-section a").click(function(){
			$(window).scrollTop(0);
			return false;
		})
	});
})(jQuery)