$('#nav-mobile li, ul.right.hide-on-med-and-down li').click(function(e){
	var currentContainer = '#' + $('.current').attr('id');
	var clickedContainer = $(this).children(":first").attr('href');
	if(typeof clickedContainer === 'undefined') {
		clickedContainer = $(this).attr('href');
	}
	if (currentContainer != clickedContainer) {
		$('div.current').fadeOut(300, function(){
			$(clickedContainer).fadeIn(300)});
		$('.current').removeClass('current');
		$(clickedContainer).addClass('current');
	}
	e.preventDefault();
});
