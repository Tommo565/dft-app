function schemeMapChart1 (Xaxis,data1,data2) {
    $('#scheme-center-top').highcharts({
    	exporting:      {enabled: false},
        chart: {
            spacing: [0,20,10,0],
            style: {
                fontFamily: "Poppins"
            }
        },
        credits: {
          enabled: false
        },
        title : {
                text : 'Congestion',
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

function schemeMapChart2 (Xaxis,data1,data2) {
    $('#scheme-center-bottom').highcharts({
    	exporting:      {enabled: false},
        chart: {
            spacing: [0,20,10,0],
            style: {
                fontFamily: "Poppins"
            }
        },
        credits: {
          enabled: false
        },
        title : {
                text : 'Road Safety',
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