var schemeTimetableNarrative = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices quis metus sed finibus. Nulla varius arcu in ante vehicula blandit. 
Integer aliquam nisi sit amet nibh imperdiet pharetra.</p>

<ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Vestibulum dui erat, finibus vitae aliquam nec, fringilla sit amet lectus.</li>
    <li>Sed luctus leo augue, ac finibus odio maximus in.</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices quis metus sed finibus. Nulla varius arcu in ante vehicula blandit. 
Integer aliquam nisi sit amet nibh imperdiet pharetra. Aenean vehicula ultricies scelerisque. Donec hendrerit luctus maximus. 
Praesent iaculis elit quis elit interdum, placerat molestie augue imperdiet. Nunc ultricies enim facilisis ligula placerat condimentum vitae sed sapien.</p>

`;

var schemeTimetableCosts = `
	<table class="dataTable display" id = "scheme-timetable-costs">
	    <thead>
	        <tr> <th>Element</th> <th>Cost</th> <th>Start Date</th> <th>End Date</th>
	        </tr>
		</thead>

		<tbody id = "region-table1-data">
			<tr> <td>Discovery</td>				<td>23.3m</td>		<td>12/11/2015</td> <td>27/06/2016</td></tr>
	        <tr> <td>Planning</td>				<td>£15.6m</td>		<td>04/03/2016</td> <td>03/03/2016</td></tr>
	        <tr> <td>Construction Phase 1</td>	<td>£128.8m</td>	<td>12/06/2017</td> <td>22/01/2018</td></tr>
	        <tr> <td>Construction Phase 2</td>	<td>£167.5m</td>	<td>12/06/2018</td> <td>31/08/2018</td></tr>
	        <tr> <td>Construction Phase 3</td>	<td>£432.4m</td>	<td>15/06/2019</td> <td>28/02/2019</td></tr>
	        <tr> <td>Implementation</td>		<td>£63.4m</td>		<td>18/08/2019</td> <td>13/10/2019</td></tr>
	        <tr> <td>Review</td>				<td>£8.3m</td>		<td>12/09/2019</td> <td>15/12/2019</td></tr>
	    </tbody>
	</table>
`;


// Main Gannt chart

function timeTable (target) {

    /// Highcharts X-range series plugin 
    
    (function (H) {
        var defaultPlotOptions = H.getOptions().plotOptions,
            columnType = H.seriesTypes.column,
            each = H.each,
            extendClass = H.extendClass,
            pick = H.pick,
            Point = H.Point;

        defaultPlotOptions.xrange = H.merge(defaultPlotOptions.column, {
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.yCategory}</b><br/>'
            }
        });
        H.seriesTypes.xrange = H.extendClass(columnType, {
            pointClass: extendClass(Point, {
                // Add x2 and yCategory to the available properties for tooltip formats
                getLabelConfig: function () {
                    var cfg = Point.prototype.getLabelConfig.call(this);

                    cfg.x2 = this.x2;
                    cfg.yCategory = this.yCategory = this.series.yAxis.categories && this.series.yAxis.categories[this.y];
                    return cfg;
                }
            }),
            type: 'xrange',
            forceDL: true,
            parallelArrays: ['x', 'x2', 'y'],
            requireSorting: false,
            animate: H.seriesTypes.line.prototype.animate,

            /**
             * Borrow the column series metrics, but with swapped axes. This gives free access
             * to features like groupPadding, grouping, pointWidth etc.
             */
            getColumnMetrics: function () {
                var metrics,
                    chart = this.chart;

                function swapAxes() {
                    each(chart.series, function (s) {
                        var xAxis = s.xAxis;
                        s.xAxis = s.yAxis;
                        s.yAxis = xAxis;
                    });
                }

                swapAxes();

                this.yAxis.closestPointRange = 1;
                metrics = columnType.prototype.getColumnMetrics.call(this);

                swapAxes();

                return metrics;
            },
            translate: function () {
                columnType.prototype.translate.apply(this, arguments);
                var series = this,
                    xAxis = series.xAxis,
                    metrics = series.columnMetrics,
                    minPointLength = series.options.minPointLength || 0;

                H.each(series.points, function (point) {
                    var barWidth = Math.min(
                            xAxis.translate(H.pick(point.x2, point.x + (point.len || 0))) - point.plotX,
                            xAxis.len
                        ),
                        barWidthDifference = barWidth < minPointLength ? minPointLength - barWidth : 0;

                    point.shapeArgs = {
                        x: Math.max(0, point.plotX) - barWidthDifference / 2,
                        y: point.plotY + metrics.offset,
                        width: barWidth + barWidthDifference,
                        height: metrics.width
                    };
                    point.tooltipPos[0] += barWidth / 2;
                    point.tooltipPos[1] -= metrics.width / 2;
                });
            }
        });

        /**
         * Max x2 should be considered in xAxis extremes
         */
        H.wrap(H.Axis.prototype, 'getSeriesExtremes', function (proceed) {
            var axis = this,
                dataMax,
                modMax;

            proceed.call(this);
            if (this.isXAxis) {
                dataMax = pick(axis.dataMax, Number.MIN_VALUE);
                each(this.series, function (series) {
                    each(series.x2Data || [], function (val) {
                        if (val > dataMax) {
                            dataMax = val;
                            modMax = true;
                        }
                    });
                });
                if (modMax) {
                    axis.dataMax = dataMax;
                }
            }
        });
    }(Highcharts));


    // THE CHART
    $(target).highcharts({
        exporting: {
        	enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            type: 'xrange',
            spacing: [0,20,10,0],
            style: {
                fontFamily: "Poppins"
            }
        },
        legend: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            //lineColor: null,
            tickColor: null
        },
        yAxis: {
            title: '',
            categories: ['Discovery', 'Planning', 'Construction Phase 1','Construction Phase 2','Construction Phase 3','Implementation','Review'],
            reversed: true,
            gridLineColor: null,
            //lineWidth: 1

        },
            tooltip: {
                headerFormat: '<table>',
                pointFormat:  '<td><b> Dates: </b> {point.xString} - {point.x2String}</td></tr>' +
							  '<td><b> Duration: </b> {point.days} Days </td></tr>' +
							  '<td><b> Costs: </b> {point.costs} </td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
        series: [{
            name: 'Project',
            pointPadding: 0,
            groupPadding: 0.3,
            borderRadius: 0,

            data: [{
                x: Date.UTC(2014, 11, 1),
                x2: Date.UTC(2015, 01, 2),
                xString: '01/11/2014',
                x2String: '02/01/2015',
                days: 78,
                y: 0,
                color: '#006399',
                narrative: 'yadayadayada',
                costs: '£8.3m',
                timetable: ''
            }, {
                x: Date.UTC(2015, 01, 30),
                x2: Date.UTC(2015, 03, 5),
                xString: '30/01/2014',
                x2String: '05/03/2015',
                days: 48,
                y: 1,
                color: '#0082ca',
                narrative: 'yadayadayada',
                costs: '£16.2m',
                timetable: ''              
            }, {
                x: Date.UTC(2015, 03, 06),
                x2: Date.UTC(2015, 04, 01),
                xString: '06/03/2015',
                x2String: '01/04/2015',
                days: 22,
                y: 2,
                color: '#66b4df',
                narrative: 'yadayadayada',
                costs: '£12.4m',
                timetable: ''
            }, {
                x: Date.UTC(2015, 04, 02),
                x2: Date.UTC(2015, 11, 19),
                xString: '02/04/2015',
                x2String: '19/11/2015',
                days: 304,
                y: 3,
                color: '#99cdea',
                narrative: 'yadayadayada',
                costs: '£481.8m',
                timetable: ''              
            }, {
                x: Date.UTC(2015, 08, 10),
                x2: Date.UTC(2016, 02, 23),
                xString: '10/08/2015',
                x2String: '23/02/2016',
                days: 299,
                y: 4,
                color: '#b3daef',
                narrative: 'yadayadayada',
                costs: '£323.1m',
                timetable: ''
            }, {
                x: Date.UTC(2016, 03, 10),
                x2: Date.UTC(2016, 07, 23),
                xString: '10/03/2016',
                x2String: '23/07/2016',
                days: 186,
                y: 5,
                color: '#b3daef',
                narrative: 'yadayadayada',
                costs: '£154.5m',
                timetable: ''
            }, {
                x: Date.UTC(2016, 10, 10),
                x2: Date.UTC(2016, 12, 23),
                xString: '10/10/2016',
                x2String: '23/12/2016',
                days: 64,
                y: 6,
                color: '#b3daef',
                narrative: 'yadayadayada',
                costs: '£32.1m',
                timetable: ''
            }]
        }]

    });
};


function schemeTimelineChart1 (target) {
    $(target).highcharts({
        chart: {
            type: 'column',
            spacing: [10,20,10,0],
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
                text : '',
                style: {"font-weight":"bold",
                        "font-size": "14px",
                        "padding": 0,
                        "margin": 0}
            }, 
        legend : {
                enabled: false
            },
        xAxis: {
            categories: ['2015','2016','2017','2018','2019'],
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
        series: [{
            name: 'Investment',
            data: [103,243,553,325,83],
            pointPadding: 0,
            groupPadding: 0.1,
            color: '#e49f73'
        }]
    });
};




function renderSchemeTimetable () {

	// Grabs the body container, fades and appends the Bootstrap scaffolding

    $("#body-container").fadeOut("slow", function () {
        $("#body-container").empty()
                            .append(bodyContainer2);

        $("#scheme-top").append('<h4 class = "text-center">Scheme Timetable</h4><br/>')
        				.append('<div id = "scheme-timetable-container" class = "col-md-12"></div>');

        timeTable('#scheme-timetable-container');

        $("#scheme-bottom-left").append('<h4 class = "text-center">Timetable Narrative</h4><br/>')
        						 .append(schemeTimetableNarrative);

        $("#scheme-bottom-center").append('<h4 class = "text-center">Costs Detail</h4><br/>')
        						  .append(schemeTimetableCosts);     



        $("#scheme-bottom-right").append('<h4 class = "text-center">Costs Breakdown over Time</h4><br/>')
        						 .append('<div id = "scheme-breakdown-container"></div>');
       
		schemeTimelineChart1('#scheme-breakdown-container');

        $("#body-container").fadeIn("slow");
	});
};

