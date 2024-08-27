
let fixed_width = 500
let height = 300


var svg = d3.select("body")
        .append("svg")
        .attr("width", fixed_width)
        .attr("height", height);

var container = d3.select("#container")

var x_scale = d3.scaleLinear().domain([0,10]).range([5,70]); 

var c_scale = d3.scaleSequential()
        .interpolator(d3.interpolateHsl("Red", "Blue"))
        .domain([5, 70]);


d3.json("notas.json").then((data) => {

    console.log(data);

    

    container.selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .append("span")
        .style("font-size", (d) => (d.nota *5) + "px")
        .text((d) => d.alumno)
        .style("color", (d) => c_scale(d.ranking))
        /*
        .on("mouseover", function(d,i) {
            d3.select(this).transition()
                .duration("50")
                .attr("opaciry", "85%");
        })*/
        .on("click", (event) => console.log(event))
        .on("mouseover", function (d, i) {
            //console.log(d)
            d3.select(this).transition()
                .duration(200)
                .style("text-anchor", "middle")
                .style("text-decoration", "underline red")

        })
        .on("mouseout", function (d, i) {
            //console.log(d)

            d3.select(this).transition()
                .duration(20)
                .style("text-decoration", "blink")
        })

})


