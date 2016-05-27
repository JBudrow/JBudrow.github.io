// $(document).ready(function() {
//     $('.container').fadeIn('slow');
// });

$('.navbar-default .navbar-nav>li').click(function(e){
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

$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');
		});
});
