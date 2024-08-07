const width = 300;
const height = 290;
var currentX = 150;
var currentY = 150;



let elementoSVG = d3.select("body")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height);

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    
    svg
    .append("circle")
    .attr("cx", currentX)
    .attr("cy", currentY)
    .attr("r", 100)
    .style("fill", "purple");

   