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

});



$('#btn-more').on('click', function (e) {
	window.location = "region.html";
});

$('#btn-back').on('click', function (e) {

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

    $("#btn-more").fadeOut("slow",function () { 

    });

    $("#btn-back").fadeOut("slow",function () { 

    });

	$(function () {
	    $('#index-right-top').highcharts({
	        chart: {
	            type: 'column',
            	spacing: [0,20,10,0],
	            style: {
	                fontFamily: "Poppins"
	            }
	        },
	        exporting: {
	                enabled: false
	            },
	        credits: {
	                enabled: false
	            },
	        title : {
	                text : 'Investment vs. Impact',
	                style: {"font-weight":"bold",
	                        "font-size": "14px",
	                        "padding": 0,
	                        "margin": 0}
	            }, 
	        legend : {
	                enabled: true,
	                margin: 4,
	                padding:0
	            },
	        xAxis: {
	            categories: ukRegionData["region"][0]["axis"],
	            crosshair: true

	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Investment (£m)'
	            }
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	                '<td style="padding:0"><b> £{point.y:.0f}m</b></td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        plotOptions: {
	            column: {
	                pointPadding: 0.2,
	                borderWidth: 0
	            }
	        },
	        series: [{
	            name: 'Investment',
	            data: ukRegionData["region"][0]["investment"],
	            pointWidth: 15,
	            color: '#006399'
	        },{
	            name: 'Impact',
	            data: ukRegionData["region"][0]["impact-data"],
	            pointWidth: 15,
	            color: '#99cdea'
	        }]
	    });
	});

	$(function () {
	    $('#index-right-bottom').highcharts({
	        chart: {
	            type: 'column',
	            spacing: [0,20,10,0],
	            style: {
	                fontFamily: "Poppins"
	            }
	        },
	        exporting: {
	                enabled: false
	            },
	        credits: {
	                enabled: false
	            },
	        title : {
	                text : 'Impact Breakdown',
	                style: {"font-weight":"bold",
	                        "font-size": "14px",
	                        "padding": 0,
	                        "margin": 0}
	            },
	        legend : {
	                enabled: true,
	                margin: 4,
	                padding:0
	            },
	        xAxis: {
	            categories: ukRegionData["region"][0]["axis"],
	            crosshair: true
	        },
	        yAxis: {
	            title: {
	                text: 'Net Benefit Ratio'
	            }
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        series: [{
	            name: 'Economic',
	            data: ukRegionData["region"][0]['economic'],
	            pointWidth: 10,
	            color: '#006399'
	        }, {
	            name: 'Environmental',
	            data: ukRegionData["region"][0]['environmental'],
	            pointWidth: 10,
	            color: '#66b4df'
	        }, {
	            name: 'Social',
	            data: ukRegionData["region"][0]['social'],
	            pointWidth: 10,
	            color: '#b3daef'
	        }]
	    });
	});
});