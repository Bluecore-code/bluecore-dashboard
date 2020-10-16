# Intalação

npm install bluecore-dashboard<br>
ou<br>
yarn add bluecore-dashboard<br>

# Como usar


    <html>
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="wrapper" id="meudashboard"></div>
        <script src="node_modules/bluecore-dashboard/dist/dashboard.js"></script>
        <script>
            Dashboard({
                el: 'meudashboard',
                json: 'data.json',
                theme: {
                    colors: ['#F00','red','black','blue']
                }
            });
        </script>
    </body>
    </html>

# Opcoes

<table>
<thead>
<tr>
    <td>Propriedade</td>
    <td>Valor</td>
</tr>
</thead>
<tbody>
<tr>
    <td>el</td>
    <td>ID do elemento que ira renderizar os graficos (Obrigatório)</td>
</tr>
<tr>
    <td>json</td>
    <td>Dados dos graficos (Obrigatório)</td>
</tr>
<tr>
    <td>colors</td>
    <td>cores do tema (opcional)</td>
</tr>
</tbody>
</table>

# Fonte
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet">

# Modelo de Json
    [
        {
            "Title": "Título Gráfico 1",
            "Chart_Type": "horizontalBars",
            "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
            "Span" : "span2"
        },
        {
            "Title": "Título Gráfico 2",
            "Chart_Type": "verticalBars",
            "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
            "Span": "spanLine"
        },
        {
            "Title": "Título Gráfico 3",
            "Chart_Type": "funnel",
            "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
            "Span": "span2"
        },
        {
            "Title": "Título Gráfico 4",
            "Chart_Type": "pie",
            "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
        },
        {
            "Title": "Título Gráfico 5",
            "Chart_Type": "horizontalBars",
            "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv"
        },
        {
            "Title": "Título Gráfico 6",
            "Chart_Type": "line",
            "URL_data": "https://demo-live-data.highcharts.com/time-data.csv",
            "Span": "span2"
        },
        {
            "Title": "Título Gráfico 7",
            "Chart_Type": "area",
            "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
            "Span": "spanLine"
        },
        {
            "Title": "Título Gráfico 8",
            "Chart_Type": "horizontalBars",
            "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
            "Span": "spanLine"
        },
        {
            "Title": "Título Gráfico 9",
            "Chart_Type": "spline",
            "URL_data": "https://demo-live-data.highcharts.com/time-data.csv",
            "Span": "span2"
        },
        {
            "Title": "Título Gráfico 10",
            "Chart_Type": "pie",
            "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
        },
        {
            "Title": "Título Gráfico 11",
            "Chart_Type": "pie",
            "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
        },
        {
            "Title": "Título Gráfico 12",
            "Chart_Type": "pie",
            "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
        }
    ]