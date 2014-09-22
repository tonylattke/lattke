var languages = ["es","de","en"];

// Show only the language of lan argument
function show(lan) {
	// Hide other languages
	for (var i = 0; i < languages.length; i++) {
		if (languages[i] != "lan"){
			$("." + languages[i]).hide();
		}
	}

	// Show Lan
	$("." + lan).show();
}

// Show all languages
function showAll() {
	for (var i = 0; i < languages.length; i++) {
		$("." + languages[i]).show();
	}
}

// Hide all languages
function hideAll() {
	for (var i = 0; i < languages.length; i++) {
		$("." + languages[i]).hide();
	}
}

$(document).ready(function(){
	
	// Default language
	show("de");

	$("#es").click(function(e) {
		show("es");
	});

	$("#en").click(function(e) {
		show("en");
	});

	$("#de").click(function(e) {
		show("de");
	});

});