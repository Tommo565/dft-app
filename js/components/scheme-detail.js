
function schemeDetailText (text) {
    
    $('#scheme-detail-text-container').fadeOut("slow", function () {
        $('#scheme-detail-text-container').append("<h3 class = 'text-center'>Scheme Impacts</h3><br/>")
                          .append(text)
                          .fadeIn("slow");
    });
};

function schemeDetailChart1 (Xaxis,data1,data2) {

    $("#scheme-center").empty()
                       .append('<h3 class = "text-center">Scheme Data</div>')
                       .append('<div id = "scheme-detail-chart1-container"></div>')   
                       .append('<div id = "scheme-detail-chart2-container"></div>')                       
                       .show();

    $('#scheme-detail-chart1-container').highcharts({
    	exporting:      {enabled: false},
        chart: {
            spacing: [0,20,10,0],
            style: {
                fontFamily: "Poppins"
            },
            height: 300
        },
        credits: {
          enabled: false
        },
        title : {
                text : 'Congestion (Contains dummy data)',
                style: {"font-weight":"bold",
                        "font-size": "14px",
                        "padding": 0,
                        "margin": 0}
            },
        xAxis: {
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            title: {
                text: 'Time'
            },
            categories: Xaxis,
			labels: {
		        rotation: 0
      		}
        },
        yAxis: {
        	max: 100,
            title: {
                text: 'Capacity (%)',
            },
            labels: {
            	formatter:  function () {
            		return this.value + '%'
            	}
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },  
        tooltip: {},
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0,
            margin: 4,
            padding: 0
        },
        series: [{
            type: 'spline',
            name: 'Without intervention',
            color: '#006399',
            marker: {
              enabled: false
            },
            data: data1
        },{           
            type: 'spline',
            name: 'With Intervention',
            color: '#66b4df',
            marker: {
              enabled: false
            },
            data: data2
        }],
    });
};


function schemeDetailChart2 (Xaxis,data1,data2) {

    $('#scheme-detail-chart2-container').highcharts({
    	exporting:      {enabled: false},
        chart: {
            spacing: [0,20,10,0],
            style: {
                fontFamily: "Poppins"
            },
        height: 300
        },
        credits: {
          enabled: false
        },
        title : {
                text : 'Road Safety (Contains dummy data)',
                style: {"font-weight":"bold",
                        "font-size": "14px",
                        "padding": 0,
                        "margin": 0}
            },
        xAxis: {
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            title: {
                text: 'Month'
            },
            categories: Xaxis,
			labels: {
		        rotation: 0
      		}
        },
        yAxis: {
        	max: 100,
            title: {
                text: 'Collisions',
            },
            labels: {
            	formatter:  function () {
            		return this.value + '%'
            	}
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },  
        tooltip: {},
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0,
            margin: 4,
            padding: 0
        },
        series: [{
            type: 'spline',
            name: 'Without intervention',
            color: '#d25f15',
            marker: {
              enabled: false
            },
            data: data1
        },{           
            type: 'spline',
            name: 'With Intervention',
            color: '#f2cfb9',
            marker: {
              enabled: false
            },
            data: data2
        }],
    });
};


function schemeDetailChart3 (Xaxis,data1,data2) {

    $("#scheme-right").empty()
                      .append('<h3 class = "text-center">Scheme Data</div>')
                      .append('<div id = "scheme-detail-chart3-container"></div>') 
                      .append('<div id = "scheme-detail-text-container"></div>')                                             
                      .show();


    $('#scheme-detail-chart3-container').highcharts({
        chart: {
            type: 'column',
            spacing: [0,20,10,0],
            style: {
                fontFamily: "Poppins"
            },
			height: 300
        },
        exporting: {
                enabled: false
            },
        credits: {
                enabled: false
            },
        title : {
                text : 'Journey Times (Contains dummy data)',
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
            categories: Xaxis,
            crosshair: true

        },
        yAxis: {
            min: 0,
            title: {
                text: 'Time (minutes)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> {point.y:.0f}mins</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'Without Intervention',
            data: data1,
            pointWidth: 30,
            color: '#66c2cb'
        },{
            name: 'With Intervention',
            data: data2,
            pointWidth: 30,
            color: '#b3e0e5'
        }]
    });
};

function schemeDetailMap () {

	var circleNormal =   {
	  radius:6, 
	  color:'#b3daef',
	  fillColor:'#016399',
	  weight: 0.5,
	  opacity: 1,
	  fillOpacity: 1
	};

	var circleHover =   {
	  radius:12, 
	  color:'#b3daef',
	  fillColor:'#016399',
	  weight: 1,
	  opacity: 1,
	  fillOpacity: 1
	};

	var circleSelect =   {
	  radius:12, 
	  color:'#b3daef',
	  fillColor:'#D25F15',
	  weight: 1,
	  opacity: 1,
	  fillOpacity: 1
	};


	L.mapbox.accessToken = 'pk.eyJ1IjoidG9tbW81NjUiLCJhIjoiY2lyN3B3NmJmMDAxd2llbm4xbmZseDM0bCJ9.knaVKwj9e-P9csD_9FY_nw';
	var map = L.mapbox.map('scheme-detail-map-container', 'mapbox.dark')
	                      .setView([52.403056,-1.176667], 15);

	var styleLayer = L.mapbox.styleLayer('mapbox://styles/tommo565/cirbrb11o001dh2ntd5u963j0')
	                               .addTo(map);

	// Adding markers

	var markers = [];

	for (var i = 0; i <= 5; ++i) {

		markers[i] = L.circleMarker([schemeGeoData.features[i]["geometry"]["coordinates"][0],schemeGeoData.features[i]["geometry"]["coordinates"][1]],circleNormal).addTo(map);
		markers[i]['Xaxis1'] = schemeGeoData.features[i].properties.xAxis1;
		markers[i]['data1Pre'] = schemeGeoData.features[i].properties.data1Pre;
		markers[i]['data1Post'] = schemeGeoData.features[i].properties.data1Post;
		markers[i]['Xaxis2'] = schemeGeoData.features[i].properties.xAxis2;
		markers[i]['data2Pre'] = schemeGeoData.features[i].properties.data2Pre;
		markers[i]['data2Post'] = schemeGeoData.features[i].properties.data2Post;
		markers[i]['Xaxis3'] = schemeGeoData.features[i].properties.xAxis3;
		markers[i]['data3Pre'] = schemeGeoData.features[i].properties.data3Pre;
		markers[i]['data3Post'] = schemeGeoData.features[i].properties.data3Post;
		markers[i]['text'] = schemeGeoData.features[i].properties.text;

		markers[i].on('mouseover', function(e) {
			if (! $(this).data("sticky")){  
			this.setStyle(circleHover);
			}
	  	});

		markers[i].on("mouseout", function (e) {
			if (! $(this).data("sticky")){  
			e.target.setStyle(circleNormal);
			}
		});

		markers[i].on('click', function(e) {
			console.log(this);
			e.target.setStyle(circleSelect);
			$(this).data("sticky", false);

			schemeDetailChart1 (this.Xaxis1,this.data1Pre,this.data1Post);
			schemeDetailChart2 (this.Xaxis2,this.data2Pre,this.data2Post);
			schemeDetailChart3 (this.Xaxis3,this.data3Pre,this.data3Post);
			schemeDetailText   (this.text);

		});
	}
};

function renderSchemeDetail () {

    // Grabs the body container, fades and appends the Bootstrap scaffolding

    $("#body-container").empty()
                        .append(bodyContainer1)
                        .hide();


    // Renders the left column

    $("#scheme-left").append('<h3 class = "text-center">Scheme Map</h3>')
                     .append('<div id = "scheme-detail-map-container"></div>');

    // Fades the body container in

    $("#body-container").fadeIn("slow");

    // Renders the map

    schemeDetailMap();

};