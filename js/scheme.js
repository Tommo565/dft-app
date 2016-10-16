$(document).ready(function() {

	// Rendering the navbar

	$("#navbar-container").append(schemeNavbar); 
	$('select').selectpicker();

	// Function for the dropdown

	$("#go-button").click(function (e) {
		e.preventDefault();

		$("#scheme-left").empty();

		$("#scheme-center-heading").empty();
		$("#scheme-center-top").empty();
		$("#scheme-center-bottom").empty();

		$("#scheme-right-heading").empty();
		$("#scheme-right-top").empty();
		$("#scheme-right-bottom").empty();

		state = $("#scheme-dropdown").val();

		if (state == "Scheme Overview") {
			renderSchemeOverview();
			
		} 
		else if (state == "Scheme Detail") {
			renderSchemeDetail();
		}
		else if (state == "Scheme Graphics") {
			$("#scheme-center-top").append("<h3 class = 'text-center'>Scheme Graphics Under Construction</h3>")
		}
		else if (state == "Scheme Timetable") {
			$("#scheme-center-top").append("<h3 class = 'text-center'>Scheme Timetable Under Construction</h3>")
		}
	});

});




	

	


