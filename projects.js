$(document).ready(function () {
	$('h2').hover(function () {
		$("." + $(this).data('par')).toggleClass('hidden');
	});
	$('.arrows').click(function() {
		$('.slide').slideToggle('hidden');
		$('.arrows img').toggleClass('upsidedown');
	});
});