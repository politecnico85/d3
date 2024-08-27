var datos = [10, 400, 300, 900, 850, 700, 1000];

var width = 500, barHeight = 20, margin = 1;


var scale = d3.scaleLinear()
            .domain([d3.min(datos), d3.max(datos)])
            .range([50, 500]);


var sequentialScale = d3.scaleSequential()
        .domain([0, 100]);

var interpolators = [
            'interpolateViridis'
        ];        


var x_axis = d3.axisBottom()
            .scale(scale);

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * datos.length);
            

var g = svg.selectAll("g")
            .data(datos)
            .join("g")
            .attr("transform", function (d, i) {
                return "translate(0," + i * barHeight +")";
            });


g.append("rect")
    .attr("width", function (d) {
        return scale(d);
    })
    .attr("height", barHeight - margin)
    .style('fill', function(d) {
        return sequentialScale(d);
    });
    

g.append("text")
    .attr("x", function (d) { return (scale(d)); })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) { return d; });

svg.append("g")
    .attr("transform", "translate(10,150)")
    .call(x_axis)




// the scale’s range is set by convention to [margin.left, width - margin.right] to draw the ticks along a horizontal axis.