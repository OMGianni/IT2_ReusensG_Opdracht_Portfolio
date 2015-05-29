$(document).ready(function(){
	$('.arrows').click(function() {
		$('.slide').slideToggle('hidden');
		$('.arrows img').toggleClass('upsidedown');
	});
});