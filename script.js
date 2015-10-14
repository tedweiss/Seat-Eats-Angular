$(function(){

	$(".stadium").hover(function() {
		$(this).css("transform", "scale(1.05)");
	}, function(){
		$(".stadium").css("transform", "scale(1)");
	});

	$(".stadium").click(function() {
		$(this).css("transform", "scale(0.95)");
	});


});