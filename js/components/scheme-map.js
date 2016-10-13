var schemeMapHeader = (`
	<h3 class = "text-center">Scheme Map</h3>
`);

var schemeMapContainer = (`
	<div id = "scheme-map"></div>
`);


// Leaflet Map File

function schemeMap () {

	var circleNormal =   {
	  radius:4, 
	  color:'#b3daef',
	  fillColor:'#016399',
	  weight: 0.5,
	  opacity: 1,
	  fillOpacity: 1
	};

	var circleHover =   {
	  radius:8, 
	  color:'#b3daef',
	  fillColor:'#016399',
	  weight: 1,
	  opacity: 1,
	  fillOpacity: 1
	};

	var circleSelect =   {
	  radius:8, 
	  color:'#b3daef',
	  fillColor:'#D25F15',
	  weight: 1,
	  opacity: 1,
	  fillOpacity: 1
	};


	L.mapbox.accessToken = 'pk.eyJ1IjoidG9tbW81NjUiLCJhIjoiY2lyN3B3NmJmMDAxd2llbm4xbmZseDM0bCJ9.knaVKwj9e-P9csD_9FY_nw';
	var map = L.mapbox.map('scheme-map', 'mapbox.dark')
	                      .setView([52.403056,-1.176667], 15);

	var styleLayer = L.mapbox.styleLayer('mapbox://styles/tommo565/cirbrb11o001dh2ntd5u963j0')
	                               .addTo(map);

	// Adding markers

	var markers = [];

	for (var i = 0; i <= 5; ++i) {

		markers[i] = L.circleMarker([schemeGeoData.features[i]["geometry"]["coordinates"][0],schemeGeoData.features[i]["geometry"]["coordinates"][1]],circleNormal).addTo(map);
		markers[i]['Xaxis1'] = schemeGeoData.features[i].properties.xAxis;
		markers[i]['data1Pre'] = schemeGeoData.features[i].properties.data1Pre;
		markers[i]['data1Post'] = schemeGeoData.features[i].properties.data1Post;

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
			schemeMapChart1 (this.Xaxis,this.data1Pre,this.data1Post);
			schemeMapChart2 (this.Xaxis,this.data1Pre,this.data1Post);

		});
	}
};