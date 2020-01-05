$(function() {

    var $preloader = $('#cube-loader'),
        $spinner   = $preloader.find('cube');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

	$('.myslider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed: 2000
	});

	$('.menu-btn').on('click' , function(e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn-active');
		$('.menu').toggleClass('menu-active');
	});
});