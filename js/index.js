$(document).ready(function() {

	// Rendering the navbar

	$("#navbar-container").append(indexNavbar); 

	// Rendering the left div

	$("#index-left-heading").append(ukRegionData['region'][0]['name'] + " Schemes" + "<br/>");
	$("#index-left-bullets-heading").append('Overview');
	$("#index-left-bullets").append(ukRegionData['region'][0]['bullets']);
	$("#index-left-bullets").append('<br/>');	
	$("#index-left-detail-heading").append('Detail');	
	$("#index-left-detail").append(ukRegionData['region'][0]['detail']);
	$("#index-left-detail").append('<br/>');
	$("#index-left-impact-heading").append('Impacts');	
	$("#index-left-impact").append(ukRegionData['region'][0]['impact']);

	// Rendering the right div

	$("#index-right-heading").append(ukRegionData['region'][0]['name'] + " Data" + "<br/>");

	// Rendering the initial charts

	indexMap();
	indexChart1(ukRegionData["region"][0]["axis"],ukRegionData["region"][0]["investment"],'#006399',ukRegionData["region"][0]["impact-data"],'#99cdea');
	indexChart2(ukRegionData["region"][0]["axis"], ukRegionData["region"][0]['economic'],'#006399', ukRegionData["region"][0]['environmental'], '#66b4df', 
				ukRegionData["region"][0]['social'], '#b3daef');
});

$('#index-btn-more').hide();
$('#index-btn-back').hide();

// What happens when the 'Show me More' button is clicked

$('#index-btn-more').on('click', function (e) {
	window.location = "region.html";
});

// What happens when the 'Take me Back' button is clicked

$('#index-btn-back').on('click', function (e) {

  	var that = ukRegionData['region'][0];
    $("#index-left-heading").fadeOut("slow",function () {
        $("#index-left-heading").empty().append(that.name + " Schemes" + "<br/>").fadeIn("slow");
    });

    $("#index-left-bullets-heading").fadeOut("slow",function () {
        $("#index-left-bullets-heading").empty().append('Overview').fadeIn("slow");
    });

    $("#index-left-bullets").fadeOut("slow",function () {
        $("#index-left-bullets").empty().append(that['bullets']).append('<br/>').fadeIn("slow"); 
    });

    $("#index-left-detail-heading").fadeOut("slow",function () {
        $("#index-left-detail-heading").empty().append('Detail').fadeIn("slow");
    });                                

    $("#index-left-detail").fadeOut("slow",function () {
        $("#index-left-detail").empty().append(that['detail']).append('<br/>').fadeIn("slow");
    });  

    $("#index-left-impact-heading").fadeOut("slow",function () {
        $("#index-left-impact-heading").empty().append('Impacts').fadeIn("slow");;
    }); 


    $("#index-left-impact").fadeOut("slow",function () {  
        $("#index-left-impact").empty().append(that['impact']).fadeIn("slow");
    }); 

    $("#index-right-heading").fadeOut("slow",function () { 
        $("#index-right-heading").empty().append(that['name'] + " Data" + "<br/>").fadeIn("slow");
    });

    $("#index-btn-more").fadeOut("slow",function () { 

    });

    $("#index-btn-back").fadeOut("slow",function () { 

    });

	indexChart1(ukRegionData["region"][0]["axis"],ukRegionData["region"][0]["investment"],'#006399',ukRegionData["region"][0]["impact-data"],'#99cdea');
	indexChart2(ukRegionData["region"][0]["axis"], ukRegionData["region"][0]['economic'],'#006399', ukRegionData["region"][0]['environmental'], '#66b4df', 
				ukRegionData["region"][0]['social'], '#b3daef');
});