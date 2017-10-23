$("#arrow").click(function() {
	$('html,body').animate({
		scrollTop: $("#about").offset().top
	}, 'slow');
});

$("#about-btn").click(function() {
	$('html,body').animate({
		scrollTop: $("#about").offset().top
	}, 'slow');
});

$("#projects-btn").click(function() {
	$('html,body').animate({
		scrollTop: $("#projects").offset().top
	}, 'slow');
});

$("#contact-btn").click(function() {
	$('html,body').animate({
		scrollTop: $("#contact").offset().top
	}, 'slow');
});

$("#home-btn").click(function() {
	$('html,body').animate({
		scrollTop: $("#home").offset().top
	}, 'slow');
});

$(".grayscale").hover( function() {
	$(this).toggleClass("grayscale");
});

$(".fa-id-card").click(function() {
	window.open("public/resume.pdf",'_blank');
});