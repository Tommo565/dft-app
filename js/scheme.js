$(document).ready(function() {

	// Rendering the navbar

	$("#navbar-container").append(schemeNavbar); 
	$('select').selectpicker();

	$('#scheme-center').append('<h4>Select a dropdown category and click "Go" to continue</h4>');
	// Function for the dropdown

	$("#go-button").click(function (e) {
		e.preventDefault();

		state = $("#scheme-dropdown").val();

		if (state == "Scheme Overview") {
			renderSchemeOverview();
		} 
		else if (state == "Scheme Detail") {
			renderSchemeDetail();
		}
		else if (state == "Scheme Graphics") {
			renderSchemeGraphics();
		}
		else if (state == "Scheme Timetable") {
			renderSchemeTimetable();
		}
	});

});




	

	


