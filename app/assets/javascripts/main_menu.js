$(document).ready(init);

function init() {

	$("#acordeon h3").click(function(){
		$("#acordeon ul ul").slideUp();

		if(!$(this).next().is("visible")){
			$(this).next().slideDown();

		}

	});
}