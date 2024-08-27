margin = {
    Top: 20,
    Rigth: 20,
    Bottom: 40,
    Left: 30
}

width = 640;
height = 400;

let spaceCircles = [{x:125,y:105,r:80}, {x: 250, y: 50, r:70}, {x: 150, y:239,r:110}];

let container = d3.select("body").append("div")
                        .attr("id", "contenedor");
let svg = d3.create("svg")
            .attr("width", width)
            .attr("height", height);
/*
svg.selectAll("circle")
    .data(spaceCircles)
    .enter()
    .append("circle")
    .attr("cx", (d) => { return d.x})
    .attr("cy", (d) => { return d.y} )
    .attr("r", (d) => { return d.r}) 
    .style("fill", "blue")
    .style("opacity", 0.2)
    */
   svg.selectAll("circle")
        .data(spaceCircles)
        .join("circle")
        .attr("cx", (d) => { return d.x})
        .attr("cy", (d) => { return d.y})
        .attr("r", (d) => { return d.r})
        .style("fill", "blue")
        .style("opacity", 0.2);

contenedor.append(svg.node())