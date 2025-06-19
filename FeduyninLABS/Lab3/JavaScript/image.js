
function drawGuitar(svg) {
    let group = svg.append("g")
        .style("stroke", "black")
        .style("stroke-width", 1)

    // Тело гитары (корпус)
    group.append("ellipse")
        .attr("cx", 0)
        .attr("cy", 50)
        .attr("rx", 50)
        .attr("ry", 65)
        .attr("fill", "#8B4513");

    // Верхняя часть корпуса
    group.append("ellipse")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("rx", 30)
        .attr("ry", 40)
        .attr("fill", "#8B4513");

    // Резонаторное отверстие
    group.append("circle")
        .attr("cx", 0)
        .attr("cy", 15)
        .attr("r", 10)
        .attr("fill", "#222");

    // Гриф
    group.append("rect")
        .attr("x", -7.5)
        .attr("y", -100)
        .attr("width", 15)
        .attr("height", 100)
        .attr("fill", "#654321");

    // Голова грифа
    group.append("rect")
        .attr("x", -12.5)
        .attr("y", -120)
        .attr("width", 25)
        .attr("height", 20)
        .attr("fill", "#333");

    // Бридж
    group.append("rect")
        .attr("x", -12.5)
        .attr("y", 40)
        .attr("width", 25)
        .attr("height", 12)
        .attr("fill", "#888");

    // Колки
    for (let i = 0; i < 3; i++) {
        group.append("circle")
            .attr("cx", -10)
            .attr("cy", -115 + i * 7.5)
            .attr("r", 1.5)
            .attr("fill", "#999");

        group.append("circle")
            .attr("cx", 10)
            .attr("cy", -115 + i * 7.5)
            .attr("r", 1.5)
            .attr("fill", "#999");
    }

    // Струны
    for (let i = 0; i < 6; i++) {
        const x = -6.5 + i * 2.5;
        group.append("line")
            .attr("x1", x)
            .attr("y1", -120)
            .attr("x2", x)
            .attr("y2", 50)
            .attr("stroke", "#aaa")
            .attr("stroke-width", i < 3 ? 1 : 0.5);
    }

    return group;
}