function indexChart2 (xaxisData, economicData, economicColor, environmentalData, environmentalColor,socialData, socialColor)  {
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
            categories: xaxisData,
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
            data: economicData,
            pointWidth: 10,
            color: economicColor
        }, {
            name: 'Environmental',
            data: environmentalData,
            pointWidth: 10,
            color: environmentalColor
        }, {
            name: 'Social',
            data: socialData,
            pointWidth: 10,
            color: socialColor
        }]
    });
};


