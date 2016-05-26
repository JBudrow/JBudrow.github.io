$(document).ready(function() {
    $('div').fadeIn('slow');
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
    });
});

// $(function() {
// 		$('.pop').on('click', function() {
// 			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
// 			$('#imagemodal').modal('show');
// 		});
// });
