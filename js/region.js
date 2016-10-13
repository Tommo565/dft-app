$(document).ready(function() {

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
	$("#region-right-heading").append(allNeSchemes['name'] + " Data <br/>");
	$("#region-right-bottom").append(regionTable1);


	// Rendering the map

	regionMap();

	// Rendering the chart

	regionChart1(allNeSchemes["x-data"],allNeSchemes["y-data"]);

});

// What happens when the 'Show me More' button is clicked

$('#region-btn-more').on('click', function (e) {
	window.location = "scheme.html";
});

// What happens when the 'Take me Back' button is clicked

$('#region-btn-back').on('click', function (e) {

	$("#region-center-heading").fadeOut("slow", function () {
		$("#region-center-heading").empty().append(allNeSchemes['name'] + " Overview <br/>").fadeIn("slow");
	});
	
	$("#region-center-bullets-heading").fadeOut("slow", function () {
		$("#region-center-bullets-heading").empty().append('Overview').fadeIn("slow");
	});

	$("#region-center-bullets").fadeOut("slow", function () {
		$("#region-center-bullets").empty().append(allNeSchemes['bullets']).append('<br/>').fadeIn("slow");
	});

	$("#region-center-detail-heading").fadeOut("slow", function () {
		$("#region-center-detail-heading").empty().append('Detail').fadeIn("slow");	
	});

	$("#region-center-detail").fadeOut("slow", function () {
		$("#region-center-detail").empty().append(allNeSchemes['detail']).append('<br/>').fadeIn("slow");
	});

	$("#region-center-impact-heading").fadeOut("slow", function () {
		$("#region-center-impact-heading").empty().append('Impacts').fadeIn("slow");
	});		

	$("#region-center-impact").fadeOut("slow", function () {
		$("#region-center-impact").empty().append(allNeSchemes['impact']).fadeIn("slow");
	});

	$("#region-table1").fadeOut("slow", function () {
		$("#region-table1").empty().append(allNeSchemes['table']).fadeIn("slow");
	});

	$("#region-right-heading").fadeOut("slow", function () {
		$("#region-right-heading").empty().append(allNeSchemes['name'] + " Data <br/>").fadeIn("slow");
	});

    $("#region-btn-more").fadeOut("slow",function () { 
    });

    $("#region-btn-back").fadeOut("slow",function () { 
    });

	// Rendering the map & chart

	regionMap();
	regionChart1(allNeSchemes["x-data"],allNeSchemes["y-data"]);

});