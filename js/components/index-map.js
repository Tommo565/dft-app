// Highcharts Regions Map

$(function () {

    $.getJSON('js/data/uk-regions.json', function (geojson) {
        $('#index-center').highcharts('Map', {
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            title : {
                text : ''
            },
            legend : {
                enabled: false
            },
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            plotOptions : {
                map: {
                    tooltip: {
                        headerFormat: '',            // Gets rid of the annoying bullet
                        pointFormat: '{point.name}'  // Returns the name of the area
                    }
                },
                series: {
                    point : {
                        events : {
                            select : function () {

                                var that = this;
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
                                    $("#btn-more").fadeIn("slow");
                                });


                                $("#btn-back").fadeOut("slow",function () { 
                                    $("#btn-back").fadeIn("slow");
                                });

                                

                                $(function () {
                                    $('#index-right-top').highcharts({
                                        chart: {
                                            type: 'column',
                                            spacing: [0,20,0,0],
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
                                            categories: that["axis"],
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
                                            data: that["investment"],
                                            pointWidth: 15,
                                            color: '#d25f15'
                                        },{
                                            name: 'Predicted Impact (Median)',
                                            data: that["impact-data"],
                                            pointWidth: 15,
                                            color: '#f2cfb9'
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
                                            categories: that    ["axis"],
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
                                            data: that['economic'],
                                            pointWidth: 10,
                                            color: '#d25f15'
                                        }, {
                                            name: 'Environmental',
                                            data: that['environmental'],
                                            pointWidth: 10,
                                            color: '#e49f73'
                                        }, {
                                            name: 'Social',
                                            data: that['social'],
                                            pointWidth: 10,
                                            color: '#f2cfb9'
                                        }]
                                    });
                                });
                            }
                        }
                    }
                }
            },

            colorAxis: {
            },

            series : [{
                data : ukRegionData["region"],
                allowPointSelect: true,
                mapData: geojson,
                joinBy: ['NAME', 'name'],
                name: ' ',
                states: {
                    hover: {
                        color: '#b3daef'    
                    },
                    select: {
                        color: '#d25f15'
                    }
                },
                color:  '#4368ab',
                dataLabels: {
                    enabled: false
                },
            }]
        });
    });
});