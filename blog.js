$(document).ready(function () {
	$('h2').click(function () {
		$('.dag5, .dag4, .dag3, .dag2, .dag1').addClass('hidden');
		$("." + $(this).data('par')).removeClass('hidden');
	});
	$('.arrows').click(function() {
		$('.slide').slideToggle('hidden');
		$('.arrows img').toggleClass('upsidedown');
	});
});