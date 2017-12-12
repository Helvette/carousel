$(document).ready(function(){
	/*
	** Dejando solo una imagen
	*/
	$(".carousel li").hide();
	$(".carousel li:first-child").fadeIn();

	// Agregando paginación (círculos)
	var addCircles = $(".carousel").children().length; // recorriendo las imágenes
	for (var i = 0 ; i < addCircles ; i++) {
		$(".circles").append("<li></li>");
	}
	$(".circles li").append("<i></i>");
	$("i").addClass("fas fa-circle");
	$(".circles li:first").css({"color":"white"});

	// Click en un círculo
	$(".circles li").click(function(){
		var pagination = $(this).index() // trae la posición del elemento clickeado (nth-child)
		// console.log(pagination);
		var image = $(".carousel").children()[pagination];
		// console.log(image);
		$(".carousel li").hide(); // escondiendo imagen actual
		$(image).fadeIn(); // mostrando imagen corresponiende al círculo
		$(".circles li").css({"color":"#E4007F"});
		$(this).css({"color":"white"});
	})

	// Click en chev derecho
	var initial = 0;
	$(".chev-right").click(function(){
		initial = initial + 1;
		if (initial >= $(".carousel").children().length){
			initial = 0;
		}
		// console.log(initial);
		var image = $(".carousel").children()[initial];
		$(".carousel li").hide();
		$(image).fadeIn();
		var circle = $(".circles").children()[initial];
		$(".circles li").css({"color":"#E4007F"});
		$(circle).css({"color":"white"});
	})

	// Click en chev izquierdo
	$(".chev-left").click(function(){
		// console.log(initial);
		if (initial <= $(".carousel").children().length){
			initial = initial - 1;
		}
		if (initial < 0){
			initial = $(".carousel").children().length - 1;
		}
		var image = $(".carousel").children()[initial];
		$(".carousel li").hide();
		$(image).fadeIn();
		var circle = $(".circles").children()[initial];
		$(".circles li").css({"color":"#E4007F"});
		$(circle).css({"color":"white"});
	})
});