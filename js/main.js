$(document).on('click', 'div[class="search-button"]', function() {
		setTimeout(function() { jQuery('input').focus() }, 20);
	 	aumentarBotao();
});

$(document).on('focusout', 'input', function(e){
		diminuirBotao();
		e.stopPropagation();
});



function aumentarBotao(){
	var search_element = document.getElementsByClassName('search-button')[0];
	search_element.style.cssText = "display: none";

	var box_element = document.getElementsByClassName('search-box')[0];
	box_element.style.cssText = "display: inline-block";

}

function diminuirBotao(){
	var search_element = document.getElementsByClassName('search-button')[0];
	search_element.style.display = "inline-block";

	var box_element = document.getElementsByClassName('search-box')[0];
	box_element.style.cssText = "display: none;"
}



