
var imageContainerLeft = `
<div class = "image-container">
<img src = "img/j19_1.jpg" class = "img-pic">
</div>
<br/>
`;

var schemeOverviewText = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat maximus quam, quis vehicula justo viverra pulvinar. 
Aenean cursus pretium eros, convallis euismod sapien dictum ac. Nulla facilisi. 
Duis vehicula nunc molestie justo euismod, ac efficitur est ultrices. Aenean cursus malesuada lorem, id gravida lectus luctus ut. 
Phasellus pulvinar lectus quis nibh cursus gravida. Etiam ante justo, pulvinar et varius non, porta vehicula metus. </p>
<p>Morbi id turpis nunc. Fusce ultrices vitae dui ut placerat. Nulla facilisi. Phasellus venenatis at ante sed ultricies. 
Proin aliquet, magna id semper varius, purus odio venenatis enim, in euismod diam leo ac arcu. Phasellus nunc nibh, fermentum nec elementum in, egestas ut orci. 
Sed sed vulputate ex, vitae lobortis nulla. Vestibulum venenatis eleifend posuere. 
Ut euismod scelerisque ullamcorper. Ut sollicitudin orci sit amet consectetur egestas. Nunc vehicula facilisis erat, nec maximus arcu luctus vestibulum. </p>
`;
var imageContainerCenter = `
<div class = "image-container">
<img src = "img/j19_2.jpg" class = "img-pic">
</div>
<br/>
`;

var schemeOverviewDetail = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit:<br/><br/>
<ul>
	<li>Donec a risus enim. Integer porta elementum leo ut iaculis. In suscipit purus ultrices lacus volutpat, eget tincidunt ante laoreet. </li>
	<li>Ut efficitur fermentum lacus, in dapibus nulla placerat ac. </li>
	<li>Ut tellus ligula, pulvinar at orci in, mattis aliquet odio. Nulla facilisi. Nulla facilisi. </li>
	<li>Curabitur eu placerat mi. Nullam auctor neque vitae mi bibendum molestie. </li>
	<li>Praesent sapien augue, euismod ut leo ac, egestas pellentesque enim. Mauris luctus blandit sapien scelerisque faucibus. </li>
</ul>

`;

function schemeOverviewChart1 () {
        $('#scheme-overview-chart-container').highcharts({
            chart: {
                type: 'bar',
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
                    text : 'Benefits & Costs (Contains dummy data)',
                    style: {"font-weight":"bold",
                            "font-size": "14px",
                            "padding": 0,
                            "margin": 0}
                }, 
            legend : {
                    enabled: false,
                },
            xAxis: {
                categories: neSchemes[0]["x-data"],
                crosshair: true,
                tickColor: null,
                title: {
                    text:''
                },
                labels: {
                  enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Benefit / Cost (£m)'
                },
                labels: {
                    formatter: function () {
                        return '£' + this.value + 'm';
                },
            }
            },
            tooltip: {
                headerFormat: '<span style="font-size:14px;font-weight:bold">{point.key}</span><table>',
                pointFormat:  '<tr><td style="color:{series.color};padding:0"></td>' +
                              '<td style="padding:0"><b> £{point.y:.0f}m</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                bar: {
                    pointPadding: 0.025,
                    borderWidth: 0,
                    groupPadding: 0.025
                }
            },
            series: [{
                name: 'Benefit / Cost',
                data: neSchemes[0]["y-data"],
                color: '#006399',
                negativeColor: '#f2cfb9',
            }]
        });
    };
;

// Function to Render the Scheme Overview page

function renderSchemeOverview () {

    // Grabs the body container, fades and appends the Bootstrap scaffolding

    $("#body-container").fadeOut("slow", function () {
        $("#body-container").empty()
                            .append(bodyContainer1);

        // Renders the left column

        $("#scheme-left").append('<h3 class = "text-center">Scheme Overview</h3>')
                         .append(imageContainerLeft)
                         .append(schemeOverviewText);

        // Renders the centre column

        $("#scheme-center").append('<h3 class = "text-center">Scheme Detail</h3>')
                           .append(imageContainerCenter) 
                           .append(schemeOverviewDetail);

        // Renders the right column

        $("#scheme-right").append('<h3 class = "text-center">Scheme Benefits / Costs</h3>')
                          .append('<div class = "row"><div class = "col-md-4" id = "scheme-overview-chart-container"></div></div>')
                          .append('<div class = "row"><div id = "scheme-overview-table-container"></div></div>');
        
        schemeOverviewChart1();
        $("#scheme-overview-table-container").append(regionTable1);

        // Fades the body container in

        $("#body-container").fadeIn("slow");

    });
};