$('.menu-g__btn').on('click' , function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-g__btn_active');
	$('.menu-g__nav').toggleClass('menu-g__nav_active');
});