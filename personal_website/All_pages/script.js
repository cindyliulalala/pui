$(document).ready(function(){

	//navigation bar changes when scrolling
	$(window).scroll(function(){
		if (this.scrollY > 100){
			$('.navBar').addClass("sticky");
		}
		else {
			$('.navBar').removeClass("sticky");
		}

		//slide up button
		if (this.scrollY > 500){
			$('.scrollUpBtn').addClass("show");
		}
		else {
			$('.scrollUpBtn').removeClass("show");
		}
	});

	$('.scrollUpBtn').click(function(){
		$('html').animate({scrollTop: 0});
	});

	//navigation bar
	$('.menuBtn').click(function(){
		$('.navBar .menu').toggleClass("active");
		$('.menuBtn i').toggleClass("active");
	});

	//typing text animation
	var typed = new Typed(".typing", {
		strings: ["Cindy Liu", "an artist", "a UI designer", "a UX designer"],
		typeSpeed: 120,
		backSpeed: 100,
		loop: true,
	});

});


