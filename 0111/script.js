var dat = [150,  300, 390, 400, 445, 580, 680, 675, 700,  740, 900, 850,  895, 485, 850,    ].sort();
var datos = dat.sort();
//var datos = Array.from(Array(100).keys());

var width = 500, barHeight = 20, margin = 1;

var colorA = "purple", colorB = "orange";

var scale = d3.scaleLinear()
            .domain([d3.min(datos), d3.max(datos)])
            .range([100, 500]);

var cScale = d3.scaleSequential()
        .interpolator(d3.interpolate("purple", "blue", "green"))
        .domain([d3.min(datos), d3.max(datos)]);

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * datos.length);

var sequentialScale = d3.scaleSequential()
            .domain([d3.min(datos), d3.max(datos)]);

colorScale = d3.scaleSequential()
            .domain([d3.min(datos), d3.max(datos)])
            .interpolator(d3.interpolate("purple", "orange"));
 
            
            
colorScaleHsl = d3.scaleSequential()
            .domain([d3.min(datos), d3.max(datos)])
            .interpolator(d3.interpolateHsl("purple", "green", "orange"));

colorScaleCubeHelix = d3.scaleSequential()
            .domain([d3.min(datos), d3.max(datos)])
            .interpolator(d3.interpolateCubehelix("purple", "orange"));
            

var g = svg.selectAll("g")
        .data(datos)
        .join("g")
        .attr("transform", function (d, i) {
            return "translate(0," + i * barHeight + ")";
        })


    g.append("rect")

            .attr("width", (d) => { return scale(d)} )
            .attr("height", barHeight - margin  )
            .style("fill", (d) => colorScaleCubeHelix(d) )

