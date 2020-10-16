import Highcharts from 'highcharts';
import Data from 'highcharts/modules/data';
import Funnel from 'highcharts/modules/funnel';

Data(Highcharts);
Funnel(Highcharts);

import serialize from './components/serialize';
import './dashboard.scss';

function Dashboard(options) {
    var defaults = {
        theme: {
            colors: ['#82ABE0', '#EE6857', '#D5F3E9', '#6A7876', '#B6CAB4', '#8DD8B8', '#8180B0', '#A08CAF', '#C7C593']
        }
    }

    var theme = options.theme ? options.theme : defaults.theme;

    function createModalFilter() {
        var form = document.querySelector('.filterForm');
        var modalFilter = document.createElement('div');
        modalFilter.classList.add('grid-header');
        modalFilter.innerHTML = `
                <button class="db-btn db-btn-primary db-toggle-modal" data-bd-filter="oi">Filtros</button>
                <div class="db-modal-dialog">
                    <form class="formFilter" method="get" id="filterDashboard">
                        <div class="db-modal-content">
                            <div class="db-modal-header">
                                Filtros
                                <a class="db-close db-toggle-dsimiss">&times;</a>
                            </div>
                            <div class="db-modal-body">
                                ${form.innerHTML}
                            </div>
                            <div class="db-modal-actions">
                                <button type="reset" class="db-btn db-btn-secondary">Limpar</button>
                                <button type="submit" class="setFilter db-btn db-btn-primary db-toggle-filter db-toggle-dsimiss" data-filter="oi">Filtrar</button>
                            </div>
                        </div>
                    </form>
                </div>
        `;

        form.remove();
        document.getElementById(options.el).before(modalFilter);
        document.querySelector('.db-toggle-modal').addEventListener('click', openModal);
        document.querySelector('.db-toggle-dsimiss').addEventListener('click', closeModal);
        window.addEventListener("click", windowOnClick);
        document.getElementById('filterDashboard').addEventListener('submit', filterDashboard);
    }
    //click outside close modal
    function windowOnClick(event){
        var modal = document.querySelector(".db-modal-dialog");
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    }

    function openModal() {
        document.querySelector('.db-modal-dialog').classList.add('active');
    }

    function closeModal() {
        document.querySelector('.db-modal-dialog').classList.remove('active');
    }

    function filterDashboard(event) {
        event.preventDefault();
        var data = serialize(event.target);
        console.log(data);
    }

    async function readJson() {
        var html = '';
        await fetch(options.json)
            .then(response => response.json())
            .then((data) => {
                data.forEach((item, index) => html += buildDashboard(item, index));
                document.getElementById(options.el).innerHTML = html;
                createModalFilter();
            });
    }

    readJson();

    function buildDashboard(item, index) {
        var chartID = item.Chart_Type + index;
        var el;
        if (item.Chart_Type == 'session') {
            el = `
                <div class="session-title">`+ item.Title + `</div>
            `;
        } else {
            el = `<div class="db-card ${item.Span}">
                            <div class="title">${item.Title}</div>
                            <a class="URL" target="_blank" href="${item.URL_data}">
                            ${item.URL_data}
                            </a>
                            <div class="chartType" id="${chartID}"></div>
                        </div>
            `;
        }
        setTimeout(() => createChart(chartID, item.URL_data), 100);
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
        // Barras Horizontais
        if (~id.indexOf("horizontalBars")) {
            window.chart = new Highcharts.chart({
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

        // Barras Verticais
        if (~id.indexOf("verticalBars")) {
            window.chart = new Highcharts.chart({
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

        // Linha
        if (~id.indexOf("line")) {
            window.chart = new Highcharts.chart({
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

        // Curvas
        if (~id.indexOf("spline")) {
            window.chart = new Highcharts.chart({
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

        // Pizza
        if (~id.indexOf("pie")) {
            window.chart = new Highcharts.chart({
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

        // Funil
        if (~id.indexOf("funnel")) {
            window.chart = new Highcharts.chart({
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

        // Area
        if (~id.indexOf("area")) {
            window.chart = new Highcharts.chart({
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

        // Ribbon
        if (~id.indexOf("ribbon")) {
            fetch(URL)
                .then(csv => csv.text())
                .then(response => {
                    var el = document.createElement('div');
                    el.classList.add('ribbon');
                    var cols = response.split(/\r\n|\n/);
                    var html = '';
                    cols.forEach((col, index) => {
                        var col = cols[index].toString().split(',');
                        var col2 = (col[2] != undefined ? `<span>` + col[2] + `</span>` : '');
                        var col3 = (col[3] != undefined ? `<span>` + col[3] + `</span>` : '');
                        var col4 = (col[4] != undefined ? `<span>` + col[4] + `</span>` : '');

                        var sub = (col2 == '' && col3 == '' && col4 == '' ? '' : '<div class="subnumb">' + col2 + col3 + col4 + '</div>');
                        html += `<div class="ribbon-item">
                            <div class="ribbon-item-title">${col[0]}</div>
                                <h3>${col[1]}</h3>
                                ${sub}
                            </div>`;

                    });
                    el.innerHTML = html;
                    document.getElementById(id).appendChild(el);
                });
        }
    }
}

export default Dashboard;