(function ($) {
	'use strict';

	var $window = $(window);
	var $nav = $('#nav');

	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	$window.on('load', function () {
		$('body').removeClass('is-preload');
		$('#page-loader').addClass('is-done');
	});

	$('#nav a, .scrolly').scrolly({
		speed: 700,
		offset: function () { return $nav.height(); }
	});

	function updateProgress() {
		var scrollableHeight = $(document).height() - $window.height();
		var progress = scrollableHeight > 0 ? ($window.scrollTop() / scrollableHeight) * 100 : 0;
		$('#progress-bar').css('width', progress + '%');
	}

	$window.on('scroll resize', updateProgress);
	updateProgress();

	var revealItems = $('.section-heading, .about-copy, .skill-card, .experience, .project-card, .education-list > div, .contact-layout > div');
	revealItems.addClass('reveal-item');

	if ('IntersectionObserver' in window) {
		var revealObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					$(entry.target).addClass('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.14 });

		revealItems.each(function () { revealObserver.observe(this); });
	} else {
		revealItems.addClass('is-visible');
	}

})(jQuery);
