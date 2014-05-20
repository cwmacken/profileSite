$(function(){
	

	// $('.dropdown-toggle').dropdown()
	// $(".collapse").collapse();
	$('.scroll').click(function(){
		var sectionTarget=$(this).attr('href');
		console.log(sectionTarget);
		var target = $(sectionTarget);
		console.log(target);
		var topDistance = target.position().top;
		console.log(topDistance);
		$('body').animate({scrollTop : topDistance-0}, 1000);
		$('body').click()
		return false;

	});
	
	
	
	
});
