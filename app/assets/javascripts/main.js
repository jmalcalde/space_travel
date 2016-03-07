$(document).ready(init);

function init() {
	$velocidad = 250;

	$margen = 30;

	$("li").mouseenter(function(e){
		var ancho = $(this).width();
		var alto = $(this).height();

		var offset = $(this).offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;

		$tapa = $(this).find(".tapa");

		if(x < $margen){
			$tapa.css("margin-top", "0px");
			$tapa.css("margin-left", '-' + ancho + 'px');
			$tapa.animate(
				{'margin-left':'0px'}, 
				$velocidad,
				'swing');

		} else if(x > ancho - $margen){
			$tapa.css("margin-top", "0px");
			$tapa.css("margin-left", ancho + 'px');
			$tapa.animate(
				{'margin-left':'0px'}, 
				$velocidad,
				'swing');
		} else if(y < $margen){
			$tapa.css("margin-left", "0px");
			$tapa.css("margin-top", '-' + alto + 'px');
			$tapa.animate(
				{'margin-top':'0px'}, 
				$velocidad);

		} else if(y > alto - $margen){
			$tapa.css("margin-left", "0px");
			$tapa.css("margin-top", alto + 'px');
			$tapa.animate(
				{'margin-top':'0px'}, 
				$velocidad);
		} 



		$tapa.css("visibility","visible");

	});

	$("li").mouseleave(function(e){
		var ancho = $(this).width();
		var alto = $(this).height();

		var offset = $(this).offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;

		$tapa = $(this).find(".tapa");

		if(x < $margen){
			$tapa.animate(
				{'margin-left':'-' + ancho + 'px'}, 
				$velocidad,
				'swing');

		} else if(x > ancho - $margen){
			$tapa.animate(
				{'margin-left':ancho + 'px'}, 
				$velocidad,
				'swing');
		} else if(y < $margen){
			$tapa.animate(
				{'margin-top':'-' + alto + 'px'}, 
				$velocidad,
				'swing');

		} else if(y > alto - $margen){
			$tapa.animate(
				{'margin-top': alto + 'px'}, 
				$velocidad,
				'swing');
		} 

	});
}
