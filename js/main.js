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
			workDetailArry = $(".worklinkDetail"),
			titles = ['FuelYourSuccess','dLab','Draftster','conormacken.com','Eggplant','Hoptoit Funding','Quiver','TicTactTron','Stokecast'];
		desc = [' Built a simple linkedin info catcher on rails using devise. Allowed the client to get demographic info on his attendees.',
			"Contracted with Directv's prototyping division to develop new and innovative ways of delivering content to a users devices. Primarily used Dust.js and jQuery.",
			"Was part of the Frontend team that built out the first iteration of the beta site. Built on AngularJS.",
			"This site ;)",
			"Built on Rails. Eggplant is a web content generation service similar to the 99designs.com model. Project 4/4 for General Assembly's WDI program.",
			"Crowdfunding for non profits. Built on Rails. Project 3/4 for General Assembly's WDI program.",
			"A surfboard ordering web app. Built on Rails. Project 2/4 for General Assembly's WDI program.",
			"Tic Tac Toe. Using Firebase and AngularJS.  Project 1/4 for General Assembly's WDI program.",
			
			]
			
			// workArry.hide();
			// workDetailArry.hide();

		for(var i = 0; i < workArry.length; i++){

			if(workArry.eq(i).attr("data-name") !== name){
				workArry.eq(i).removeClass("col-sm-3");
				workArry.eq(i).addClass("col-sm-11");
				workArry.eq(i).html('');
			}else{
				workArry.eq(i).addClass("worklink-black");
				workArry.eq(i).show();
				workDetailArry.eq(i).fadeIn(700);
				workDetailArry.eq(i).children().fadeIn(700);
				workArry.unbind();
				workArry.eq(i).click(function(){
					var self = $(this);
					self.removeClass("worklink-black");
					self.next().children().fadeOut(700);
					for(var i = 0; i < workArry.length; i++){
						workArry.eq(i).html(titles[i]);
					}
					workDetailArry.show();
					workArry.addClass("col-sm-3");
					workArry.click(function() {
						hideShow(this);
					});

				});

			}
		}
		return false;

	};

});
