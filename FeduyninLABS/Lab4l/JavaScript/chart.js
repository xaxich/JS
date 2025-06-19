function createArrGraph(data, key) {

    let groupObj = d3.group(data, d => d[key]);

    let arrGraph =[];
    for(let entry of groupObj) {
        let minMax = d3.extent(entry[1].map(d => d['Высота']));
        arrGraph.push({labelX : entry[0], values : minMax});
    }

    return arrGraph;
}

function drawGraph(data) {
    // значения по оси ОХ
    const keyX = d3.select("input[name='oxvalue']:checked").attr("value");
    const states = [document.getElementById("minis").checked, document.getElementById("maxis").checked]
    let flag = false;
    states.forEach(i => flag = flag || i);

    if (!flag){
        d3.select("input[name='oyvalue'").node().parentNode.classList.add("error");
        return;
    }

    d3.select("input[name='oyvalue'").node().parentNode.classList.remove("error");
    // создаем массив для построения графика
    let arrGraph = createArrGraph(data, keyX);

    if (keyX === "Год"){
        arrGraph = arrGraph.sort((a, b) => +a.labelX - +b.labelX);
    }

    let svg = d3.select("svg")
    svg.selectAll('*').remove();
    svg.style("width", 800)
        .style("height", 400);

    // создаем словарь с атрибутами области вывода графика
    attr_area = {
        width: parseFloat(svg.style('width')),
        height: parseFloat(svg.style('height')),
        marginX: 50,
        marginY: 50
    }

    // создаем шкалы преобразования и выводим оси
    const [scX, scY] = createAxis(svg, arrGraph, attr_area);

    // рисуем график
    createChart(svg, arrGraph, scX, scY, attr_area, ["blue", "red"], states, d3.select("select").node().value);
}

function createAxis(svg, data, attr_area){
    // находим интервал значений, которые нужно отложить по оси OY
    // максимальное и минимальное значение и максимальных высот по каждой стране
    const [min, max] = d3.extent(data.map(d => d.values[1]));

    // функция интерполяции значений на оси
    // по оси ОХ текстовые значения
    let scaleX = d3.scaleBand()
        .domain(data.map(d => d.labelX))
        .range([0, attr_area.width - 2 * attr_area.marginX]);

    let scaleY = d3.scaleLinear()
        .domain([min * 0.85, max * 1.1 ])
        .range([attr_area.height - 2 * attr_area.marginY, 0]);

    // создание осей
    let axisX = d3.axisBottom(scaleX); // горизонтальная
    let axisY = d3.axisLeft(scaleY); // вертикальная

    // отрисовка осей в SVG-элементе
    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, 
                                      ${attr_area.height - attr_area.marginY})`)
        .call(axisX)
        .selectAll("text") // подписи на оси - наклонные
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", d => "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .call(axisY);

    return [scaleX, scaleY]
}

function createChart(svg, data, scaleX, scaleY, attr_area, colors, states, type) {
    const r = 4;
    if (type == 0){
        for (let i in states) {
            if (states[i]){
                svg.selectAll(".dot")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("r", r)
                    .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
                    .attr("cy", d => scaleY(d.values[i]))
                    .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
                    .style("fill", colors[i]);
            }
        }
    } else {
        for (let i in states) {
            if (states[i]){
                svg.selectAll(".dot")
                    .data(data)
                    .enter()
                    .append("line")
                    .attr("x1", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
                    .attr("x2", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
                    .attr("y1", d => scaleY(d.values[i]))
                    .attr("y2", d => 300)
                    .attr("transform", `translate(${attr_area.marginX + (i*2-1)*2.5}, ${attr_area.marginY})`)
                    .style("stroke", colors[i])
                    .style("stroke-width", "5px");
            }
        }
    }


}