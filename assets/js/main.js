/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Scroll Progress Bar
		$window.on('scroll', function() {
			var scrollTop = $window.scrollTop(),
				docHeight = $(document).height() - $window.height(),
				scrollPercent = (scrollTop / docHeight) * 100;
			$('#progress-bar').css('width', scrollPercent + '%');
		});

	// Typing Effect
		var text = "Bonjour, je suis Emmanuelle.";
		var i = 0;
		var speed = 100;
		function typeWriter() {
			if (i < text.length) {
				$('#top h1').html(text.substring(0, i + 1) + '<span class="cursor">|</span>');
				i++;
				setTimeout(typeWriter, speed);
			} else {
				$('#top h1').html(text + '<strong>.</strong>');
			}
		}
		setTimeout(typeWriter, 1000); // Start after 1 second

})(jQuery);