$(document).ready(function() {

	// Rendering the navbar

	$("#navbar-container").append(schemeNavbar); 
	$('select').selectpicker();

	// Rendering the Map
	$("#scheme-left").append(schemeMapHeader);
	$("#scheme-left").append(schemeMapContainer);

	$("#scheme-center-heading").append('<h3 class = "text-center">Scheme Data</h3>');

	schemeMap();
});

