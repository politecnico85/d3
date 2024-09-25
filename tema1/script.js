var width = 700
var height = 400

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


var container = d3.select("#container")


var x_scale = d3.scaleLinear()
                .range([0, width]);

var y_scale = d3.scaleLinear()
            .range([height -20, 20])

var c_scale = d3.scaleSequential()
            .interpolator(d3.interpolateHsl("Green", "Blue", "Red"))
            .domain([5,70])

var x_axis = d3.axisBottom(x_scale);

function tooltip (data, visible){
    //console.log(data)
    let mostrar;
    if (visible ==="1"){
        mostrar = "visible"
    }
    else {
        mostrar = "hidden"
    }
    var tooltip = d3.select("#tooltip")
    .append("div")
    .text(data.alumno)
    .style("visibility", mostrar)
}

d3.json("datos.json").then((data) => {
    console.log(data)

    x_scale.domain(data.map ((d) => d.nota))
    y_scale.domain(data.map ((d) => d.nota))
    
    container = d3.select("svg").selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("cx", (d) => x_scale(d.nota))
                    .attr("cy", (d) => y_scale(d.nota) )
                    .attr("r", (d) => (d.nota *5))
                    .style("fill", (d) => (c_scale(d.ranking)))
                    .call(x_scale)
                    .on("mouseover", (d) => (tooltip(data, "1")))
})            



