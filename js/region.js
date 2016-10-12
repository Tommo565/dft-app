$(document).ready(function() {

	// Hiding the buttons (Need to change the CSS to set initial state to hidden)

	$('#region-btn-more').hide();
	$('#region-btn-back').hide();

	// Rendering the navbar

	$("#navbar-container").append(regionNavbar); 

	// Rendering the centre div

	$("#region-center-heading").append(allNeSchemes['name'] + " Overview <br/>");
	$("#region-center-bullets-heading").append('Overview');
	$("#region-center-bullets").append(allNeSchemes['bullets']);
	$("#region-center-bullets").append('<br/>');	
	$("#region-center-detail-heading").append('Detail');	
	$("#region-center-detail").append(allNeSchemes['detail']);
	$("#region-center-detail").append('<br/>');
	$("#region-center-impact-heading").append('Impacts');	
	$("#region-center-impact").append(allNeSchemes['impact']);
	$("#region-right-heading").append(allNeSchemes['name'] + " Overview <br/>");
	$("#region-right-bottom").append(regionTable1);


	// Rendering the map

	regionMap();

	// Rendering the chart

	regionChart1(allNeSchemes["x-data"],allNeSchemes["y-data"]);

});