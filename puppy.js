$('.btn-success').on('click', function(){

	$('.puppy').stop().css({'left' : '50%', 'top' : '50%'});

	$('#puppy-one').animate({'left': '-2000px'}, 6000);
	$('#puppy-two').animate({'left': '2000px'}, 6000);
	$('#puppy-three').animate({'left': '2000px', 'top': '80%'}, 4000);
	$('#puppy-four').animate({'left': '2000px', 'top': '600%'}, 5000);
	$('#puppy-five').animate({'left': '-2000px', 'top': '500%'}, 4500);
});
