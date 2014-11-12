$(function(){

	$('.scroll').click(function(){

		var sectionTarget=$(this).attr('href'),
			target = $(sectionTarget),
			topDistance = target.position().top;
		
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
			workDetailArry = $(".worklinkDetail"),
			titles = ['FuelYourSuccess','dLab','Draftster','conormacken.com','Eggplant','Hoptoit Funding','Quiver','TicTactTron','Stokecast'];
			
		for(var i = 0; i < workArry.length; i++){

			if(workArry.eq(i).attr("data-name") !== name){
				workArry.eq(i).toggleClass("col-sm-3", "col-sm-11");
				workArry.eq(i).html('');
			}else{
				workArry.eq(i).toggleClass("worklink-black");
				workDetailArry.eq(i).children().fadeIn(700);
				workArry.unbind();
				workArry.eq(i).click(function(){
				
					var self = $(this);

					self.toggleClass("worklink-black");
					workArry.toggleClass("col-sm-3", "col-sm-11");
					workArry.click(function() {
						hideShow(this);
					});

					self.next().children().fadeOut(700, function(){
						
						for(var i = 0; i < workArry.length; i++){
							workArry.eq(i).html(titles[i]);
						}

					});
				});

			}
		}
		return false;

	};

});
