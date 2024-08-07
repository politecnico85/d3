
    const height = 500;
    const width = 500;
    const padAngle = 0.03
    const innerRadius = 73.3333 
    const outerRadius = 40


    // onload="cargarDatos()"
    
    const data = [1, 1, 2, 3, 5, 8, 13, 21];
    const pie1 = d3.pie().padAngle(0.03); // fixed pad angle (bad)
    const pie2 = d3.pie().padAngle(padAngle); // adjusted pad angle (good)
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    const svg = d3.select("body")
        .append("svg")
        .attr("viewBox", [0, -height / 2, width, height]);

    const g = svg.selectAll("g")
        .data(() => [pie1(data), pie2(data)])
        .join("g")
        .attr("fill", (d, i) => ["brown", "steelblue"][i])
        .attr("transform", (d, i) => `translate(${width / 2 * (i + 0.5)})`);

    g.append("g")
        .attr("fill", "none")
        .attr("stroke", "#777")
        .selectAll("path")
        .data(arcs => arcs)
        .join("path")
        .attr("d", arc.padAngle(0));

    g.append("g")
        .attr("stroke", "#000")
        .attr("stroke-width", "1.5px")
        .attr("stroke-linejoin", "round")
        .selectAll("path")
        .data(arcs => arcs)
        .join("path")
        .attr("d", arc.padAngle(padAngle));

