$(function(){

	$('.scroll').click(function(){
		var sectionTarget=$(this).attr('href');
		var target = $(sectionTarget);
		var topDistance = target.position().top;
		$('body').animate({scrollTop : topDistance-0}, 1000);
		return false;
	});

	$(".worklink").click(function() {
			hideShow(this);
	});

	var hideShow = function(target) {

		var self = $(target),
			name = self.attr('data-name'),
			workArry = $(".worklink"),
			workDetailArry = $(".worklinkDetail");

			workArry.hide();
			workDetailArry.hide();

		for(var i = 0; i < workArry.length; i++){

			if(workArry.eq(i).attr("data-name") !== name){
				
			}else{
				workArry.eq(i).addClass("worklink-black");
				workArry.eq(i).show();
				workDetailArry.eq(i).fadeIn(700);
				workDetailArry.eq(i).children().fadeIn(700);
				workArry.unbind();
				workArry.eq(i).click(function(){
					var self = $(this)
					self.removeClass("worklink-black");
					self.next().children().fadeOut(700);
					workArry.fadeIn(700);
					workDetailArry.show();
					workArry.click(function() {
						hideShow(this);
					});

				})

			}
		}

		return false;

	};

});
