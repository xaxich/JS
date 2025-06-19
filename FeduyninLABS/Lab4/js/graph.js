const COLORS = {
    "avgDuration": "#FF0000",
    "listens": "#0000FF",
}

const COLORS_DOUBLE = {
    "avgDuration": ["#0000FF", "#FF0000"],
    "listens": ["#00D000", "#D0D000"],
}

function getArrayOfTableObjects(table) {
    let rowData = Array.from(table.rows);
    let header = rowData.shift();

    let keys = Object.keys(bandsData[0]);
    let arr = rowData.map( row => {
        let obj = {}
        let c = row.cells;
        for (let i = 0; i < c.length; i++) {
            obj[keys[i]] = c[i].innerHTML;
        }
        return obj;
    })
    return arr;
}

function buildGraph(dataForm) {

    let table = document.getElementById("list");
    let arr = getArrayOfTableObjects(table)

    drawGraph(arr);
}

function createArrGraph(data, key, params) {

    if (key !== "name") {

        let groupObj = d3.group(data, d => d[key]);

        let arrGraph = [];
        for(let entry of groupObj) {
            arrGraph.push({
                labelX : entry[0],
                values : params.map( par => d3.extent(entry[1].map(d => +d[par])) )
            });
        }

        return arrGraph.sort((a, b) => +a.labelX - +b.labelX);

    }

    return data.map( obj => {
        return {
            labelX: obj[key],
            values: params.map( par => +obj[par])
        }
    })

}

function drawGraph(data) {
    const keyX = d3.select("input[name='xvalue']:checked").attr("value");

    let params = []
    d3.selectAll("input[name='yvalue']:checked")._groups[0].forEach(d => params.push(d.value))

    if (params.length === 0){
        d3.selectAll("input[name='yvalue'")._groups[0].forEach(el => el.parentNode.classList.add("error"))
        return;
    }
    d3.selectAll("input[name='yvalue'")._groups[0].forEach(el => el.parentNode.classList.remove("error"))

    let arrGraph = createArrGraph(data, keyX, params);

    if (keyX !== "name") {
        arrGraph = arrGraph.sort((a, b) => +a.labelX - +b.labelX);
    }

    let svg = d3.select("svg")
    svg.selectAll('*').remove();
    svg.style("width", 900)
        .style("height", 420);

    let attr_area = {
        width: parseFloat(svg.style('width')),
        height: parseFloat(svg.style('height')),
        marginX: 60,
        marginY: 90,
        isDouble: keyX !== "name"
    }

    const [scX, scY] = createAxis(svg, arrGraph, attr_area);

    let type = d3.select("select[id='diagramType']")._groups[0][0].selectedOptions[0].value;

    createChart(svg, arrGraph, scX, scY, attr_area, params, type);
}

function createAxis(svg, data, attr_area){

    let min, max;
    if (attr_area.isDouble) {
        [min, max] = d3.extent(data.map(d => d.values.flat()).flat());
    }
    else {
        [min, max] = d3.extent(data.map(d => d.values).flat());
    }

    let scaleX = d3.scaleBand()
        .domain(data.map(d => d.labelX))
        .range([0, attr_area.width - 2 * attr_area.marginX]);

    let scaleY = d3.scaleLinear()
        .domain([min * 0.85, max * 1.1 ])
        .range([attr_area.height - 2 * attr_area.marginY, 0]);

    let axisX = d3.axisBottom(scaleX);
    let axisY = d3.axisLeft(scaleY);

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, 
                                      ${attr_area.height - attr_area.marginY})`)
        .call(axisX)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", d => "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .call(axisY);

    return [scaleX, scaleY]
}

function createChart(svg, data, scaleX, scaleY, attr_area, params, type) {
    const r = 4;

    if (attr_area.isDouble) {

        params.forEach( (p, i) => {
            for (let j = 1; j >= 0; j--) {
                switch (type) {
                    case "point":
                        makeCircles(svg, data, r, scaleX, scaleY, attr_area, COLORS_DOUBLE[p][j], i, j)
                        break;
                    case "line":
                        makeLines(svg, data, scaleX, scaleY, attr_area, COLORS_DOUBLE[p][j], i, j)
                        break;
                    case "bar":
                        makeBars(svg, data, scaleX, scaleY, attr_area, COLORS_DOUBLE[p][j], i, j)
                }
            }

        })

    } else {
        params.forEach( (p, i) => {
            switch (type) {
                case "point":
                    makeCircles(svg, data, r, scaleX, scaleY, attr_area, COLORS[p], i)
                    break;
                case "line":
                    makeLines(svg, data, scaleX, scaleY, attr_area, COLORS[p], i)
                    break;
                case "bar":
                    makeBars(svg, data, scaleX, scaleY, attr_area, COLORS[p], i)
            }
        })
    }


}

function makeCircles(svg, data, r, scaleX, scaleY, attr_area, color, i, j = 0){
    let g = svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", d => scaleY(d.values[i][j]))
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .style("fill", color);
    if (attr_area.isDouble) {
        g.attr("cy", d=>scaleY(d.values[i][j]))
    } else {
        g.attr("cy", d=>scaleY(d.values[i]))
    }
}

function makeBars(svg, data, scaleX, scaleY, attr_area, color, i, j = 0){
    let g = svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("x2", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)

        .attr("y2", d => attr_area.height - attr_area.marginY*2)
        .attr("transform", `translate(${attr_area.marginX + (1-2*i)*2}, ${attr_area.marginY})`)
        .style("stroke", color)
        .style("stroke-width", "4px");

    if (attr_area.isDouble) {
        g.attr("y1", d => scaleY(d.values[i][j]))
    } else {
        g.attr("y1", d => scaleY(d.values[i]))
    }
}

function makeLines(svg, data, scaleX, scaleY, attr_area, color, i, j = 0) {

    let path = "";

    if (attr_area.isDouble) {
        data.forEach( (d, index ) => {
            if (index === 0) {
                path += `M${scaleX(d.labelX) + scaleX.bandwidth() / 2},${scaleY(d.values[i][j])}`;
            } else {
                path += `L${scaleX(d.labelX) + scaleX.bandwidth() / 2},${scaleY(d.values[i][j])}`;
            }
        })
    } else {
        data.forEach( (d, index ) => {
            if (index === 0) {
                path += `M${scaleX(d.labelX) + scaleX.bandwidth() / 2},${scaleY(d.values[i])}`;
            } else {
                path += `L${scaleX(d.labelX) + scaleX.bandwidth() / 2},${scaleY(d.values[i])}`;
            }
        })
    }

    let g = svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1.5)
        .attr("d", path)
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
}
