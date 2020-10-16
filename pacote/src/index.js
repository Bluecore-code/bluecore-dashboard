import Highcharts from 'highcharts';
import Data from 'highcharts/modules/data';
import Funnel from 'highcharts/modules/funnel';

import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);
Data(Highcharts);
Funnel(Highcharts);

import './dashboard.scss';

function Dashboard(options) {
    var defaults = {
        theme: {
            colors: ['#82ABE0','#EE6857','#D5F3E9','#6A7876','#B6CAB4','#8DD8B8','#8180B0','#A08CAF','#C7C593']
        }
    }

    var theme = options.theme ? options.theme : defaults.theme

    async function readJson() {
        var html = '';
        await fetch(options.json)
            .then(response => response.json())
            .then((data) => {
                data.forEach((item, index) => html += buildNewList(item, index));
                document.getElementById(options.el).innerHTML = html;
            });
    }

    readJson();

    function buildNewList(item, index) {
        var chartID = item.Chart_Type + index;
        let el =  `<div class="card ${item.Span}">
                        <div class="title">${item.Title}</div>
                        <a class="URL" target="_blank" href="${item.URL_data}">
                        ${item.URL_data}
                        </a>
                        <div class="chartType" id="${chartID}"></div>
                    </div>
        `;
        setTimeout(() => createChart(chartID, item.URL_data), 1000);
        return el;
    }

    Highcharts.theme = {
        colors: theme.colors,
        chart: {
            style: {
                fontFamily: 'Rubik',
                color: '#575D66',
            },
        },
    };

    Highcharts.setOptions(Highcharts.theme);

    function createChart(id, URL) {


        if (~id.indexOf("horizontalBars")) {
            Highcharts.chart({
                chart: {
                    type: 'bar',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                plotOptions: {
                    bar: {
                        colorByPoint: true,
                        borderRadius: 4
                    },
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.0f}%',
                            style: {
                                fontWeight: 400,
                            }
                        }
                    }
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    labels: {
                        enabled: false,
                    },
                    title: {
                        enabled: false,
                    }
                },
                yAxis: {
                    title: {
                        enabled: false,
                    }
                },
            });
        }

        if (~id.indexOf("verticalBars")) {
            Highcharts.chart({
                chart: {
                    type: 'column',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                plotOptions: {
                    column: {
                        borderRadius: 5,
                        colorByPoint: true
                    },
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.0f}%',
                            style: {
                                fontWeight: 400,
                            }
                        }
                    }
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        enabled: false,
                    },
                    legend: {
                        enabled: false,
                    }
                },
                yAxis: {
                    labels: {
                        enabled: false,
                    },
                    title: {
                        enabled: false,
                    }
                },
            });
        }

        if (~id.indexOf("line")) {
            Highcharts.chart({
                chart: {
                    type: 'line',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.0f}%',
                            style: {
                                fontWeight: 400,
                            }
                        }
                    }
                },
                accessibility: {
                    announceNewData: {
                        enabled: true,
                        minAnnounceInterval: 5000,
                        announcementFormatter: function (allSeries, newSeries, newPoint) {
                            if (newPoint) {
                                return 'New point added. Value: ' + newPoint.y;
                            }
                            return false;
                        }
                    }
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    labels: {
                        enabled: false,
                    },
                    legend: {
                        enabled: false,
                    }
                },
                yAxis: {
                    labels: {
                        enabled: false,
                    },
                    title: {
                        enabled: false,
                    }
                },
            });
        }

        if (~id.indexOf("spline")) {
            Highcharts.chart({
                chart: {
                    type: 'spline',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.0f}%',
                            style: {
                                fontWeight: 400,
                            }
                        }
                    }
                },
                accessibility: {
                    announceNewData: {
                        enabled: true,
                        minAnnounceInterval: 5000,
                        announcementFormatter: function (allSeries, newSeries, newPoint) {
                            if (newPoint) {
                                return 'New point added. Value: ' + newPoint.y;
                            }
                            return false;
                        }
                    }
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    labels: {
                        enabled: false,
                    },
                    legend: {
                        enabled: false,
                    }
                },
                yAxis: {
                    labels: {
                        enabled: false,
                    },
                    title: {
                        enabled: false,
                    }
                },
            });
        }

        if (~id.indexOf("pie")) {
            Highcharts.chart({
                chart: {
                    type: 'pie',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -20,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }
                    },
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.0f}%'
                        }
                    }
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        enabled: false,
                    }
                },
                yAxis: {
                    max: 100,
                    title: false,
                    plotBands: [{
                        from: 0,
                        to: 30,
                        color: '#E8F5E9'
                    }, {
                        from: 30,
                        to: 70,
                        color: '#FFFDE7'
                    }, {
                        from: 70,
                        to: 100,
                        color: "#FFEBEE"
                    }]
                }
            });
        }

        if (~id.indexOf("funnel")) {
            Highcharts.chart({
                chart: {
                    type: 'funnel',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.0f}%',
                            style: {
                                fontWeight: 400,
                            }
                        }
                    }
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        enabled: false,
                    }
                },
                yAxis: {
                    max: 100,
                    title: false,
                    plotBands: [{
                        from: 0,
                        to: 30,
                        color: '#E8F5E9'
                    }, {
                        from: 30,
                        to: 70,
                        color: '#FFFDE7'
                    }, {
                        from: 70,
                        to: 100,
                        color: "#FFEBEE"
                    }]
                }
            });
        }

        if (~id.indexOf("area")) {
            Highcharts.chart({
                chart: {
                    type: 'area',
                    renderTo: id
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                data: {
                    csvURL: URL,
                    enablePolling: true,
                    dataRefreshRate: 2
                },
                plotOptions: {
                    area: {
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '%'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        enabled: false,
                    }
                },
                yAxis: {
                    title: {
                        enabled: false,
                    }
                }
            });
        }
    }
}

export default Dashboard;