# Intalação

npm install bluecore-dashboard<br>
ou<br>
yarn add bluecore-dashboard<br>

# Demo

<a href="http://design-bluecore.azurewebsites.net/dashboard_DIN/">Demo</a>

# Como usar

    <html>
    <head>
        <title>Bluecore Dashboard</title>
    </head>
    <body>
        <div class="dashboard-wrapper" id="meudashboard"></div>
        <div class="filterForm">
            <!-- filter enter here-->
            <div class="db-input-group">
                <label for="filter1">Label</label>
                <input type="text" name="filter1" class="db-input" id="filter1">
            </div>
            <div class="db-input-group">
                <label for="filter2">Label</label>
                <select type="text" name="filter2" class="db-input" id="filter2">
                    <option selected disabled>Selecione...</option>
                    <option value="Azul">Azul</option>
                </select>
            </div>
            <div class="db-row">
                <div class="db-input-group">
                    <label for="filter3">De</label>
                    <select type="text" name="de" class="db-input" id="filter3">
                        <option selected disabled>Selecione...</option>
                        <option value="20-03-2020">20/03/2020</option>
                    </select>
                </div>
                <div class="db-input-group">
                    <label for="filter4">Até</label>
                    <select type="text" name="ate" class="db-input" id="filter4">
                        <option selected disabled>Selecione...</option>
                        <option value="20-03-2020">20/03/2020</option>
                    </select>
                </div>
            </div>
            <label class="divider">Selecione</label>
            <div class="db-check-group">
                <input type="checkbox" name="filter5" id="chk1">
                <label for="chk1">Selecione</label>
            </div>
            <div class="db-check-group">
                <input type="checkbox" name="filter6" id="chk2">
                <label for="chk2">Selecione</label>
            </div>
            <label class="divider">Selecione</label>
            <div class="db-check-group">
                <input type="radio" name="filter7" id="rdo1">
                <label for="rdo1">Selecione</label>
            </div>
            <div class="db-check-group">
                <input type="radio" name="filter7" id="rdo2">
                <label for="rdo2">Selecione</label>
            </div>
        </div>
        <script src="node_modules/bluecore-dashboard/dist/dashboard.js"></script>
        <script>
            Dashboard({
                el: 'meudashboard',
                json: 'data.json'
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

# Modelo de Json
[
    
    {
        "Title": "Visão Geral",
        "Chart_Type": "ribbon",
        "URL_data": "ribbon.csv",
        "Span" : "spanLine"
    },
    {
        "Title": "Barras Horizontais",
        "Chart_Type": "horizontalBars",
        "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
        "Span" : "span2"
    },
    {
        "Title": "Barras Verticais",
        "Chart_Type": "verticalBars",
        "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
        "Span": "spanLine"
    },
    {
        "Title": " Funil",
        "Chart_Type": "funnel",
        "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
        "Span": "span2"
    },
    {
        "Title": "Ribbon 2",
        "Chart_Type": "ribbon",
        "URL_data": "ribbon.csv",
        "Span" : "spanLine"
    },
    {
        "Title": "Pizza",
        "Chart_Type": "pie",
        "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
    },
    {
        "Title": "Título da Seção",
        "Chart_Type": "session"
    },
    {
        "Title": "Barras Horizontais",
        "Chart_Type": "horizontalBars",
        "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
        "Span": "span2"
    },
    {
        "Title": "Linha",
        "Chart_Type": "line",
        "URL_data": "https://demo-live-data.highcharts.com/time-data.csv",
        "Span": "span2"
    },
    {
        "Title": "Área",
        "Chart_Type": "area",
        "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
        "Span": "spanLine"
    },
    {
        "Title": "Barras Horizontais",
        "Chart_Type": "horizontalBars",
        "URL_data": "https://demo-live-data.highcharts.com/vs-load.csv",
        "Span": "span3"
    },
    {
        "Title": "Curvas",
        "Chart_Type": "spline",
        "URL_data": "https://demo-live-data.highcharts.com/time-data.csv",
        "Span": "span2"
    },
    {
        "Title": "Pizza",
        "Chart_Type": "pie",
        "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
    },
    {
        "Title": "Pizza",
        "Chart_Type": "pie",
        "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
    },
    {
        "Title": "Pizza",
        "Chart_Type": "pie",
        "URL_data": "https://demo-live-data.highcharts.com/updating-set.csv"
    }
]