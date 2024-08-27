

const margin = {top: 20, bottom: 30, right: 55, left:70};

const width = document.querySelector("body").clientWidth, height = 700;

const svg = d3.select("#d3_container").append("svg")
            .attr("width", width)
            .attr("height", height+70);

svg.append("text")
    .attr("x", width /2)
    .attr("y", margin.top)
    .attr("text-anchor", "middle")
    .style("font-size","22px" )
    .style("text-decoration", "underline")
    .text("USA States Population");

const x_scale = d3
        .scaleBand()
        .range([margin.left, width - margin.right])
        .padding(0.2)
        .align(0);


const y_scale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

let x_axis = d3.axisBottom(x_scale);

let y_axis = d3.axisLeft(y_scale);

d3.json("https://raw.githubusercontent.com/politecnico85/d3/main/ventas.json").then((data) => {
    console.log(data)
    x_scale.domain(data.map((d) => d.anio));
    y_scale.domain([0, d3.max(data, (d) => d.ventas)]);

    const lineFunction = d3.line()
            .x(function(d) { return d.anio; })
            .y(function(d) { return d.ventas; })
            .curve(d3.curveLinear);

    let g = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g")


    g.append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x_scale(d.anio))
    .attr("y", (d) => y_scale(d.ventas))
    .attr("width", x_scale.bandwidth())
    .attr("fill", function(d) {
        return "rgb(150, 0, " + (d.ventas / 500) +")";
    })
    
    .attr("height", (d) => height - margin.bottom - y_scale(d.ventas));


    g.append("text")
        .attr("x", (d) => x_scale(d.anio))
        .attr("y", (d) => y_scale(d.ventas))
        .attr("dy", "3.5")
        .text(function(d) { return d.ventas})


    svg.append("g")
    //.attr("transform", "translate(10, " + ( height /100) +")")
        .attr("transform",`translate(${0},${height - 20})`)
        .call(x_axis);

    svg.append("g")
        .attr("transform", "translate(50, 10)")
        .call(y_axis)
        
/*
    svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x_scale(d.anio))
    .attr("y", (d) => y_scale(d.ventas))
    .attr("width", x_scale.bandwidth())
    //.attr("fill", "blue")
    .attr("fill", function(d) {
        return "rgb(150, 0, " + (d.ventas / 500) +")";
    })
    
    .attr("height", (d) => height - margin.bottom - y_scale(d.ventas));


   */

});


