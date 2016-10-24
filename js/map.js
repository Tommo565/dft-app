var mapContainer = `
<div id = "map-container"></div>
`;


function map () {

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