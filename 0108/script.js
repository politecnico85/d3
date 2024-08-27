var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

var lineFunction = d3.line()
                        .x((d) =>{ return d.x } )
                        .y((d) => { return d.y } ); 


var svgcontainer = d3.select("body").append("svg")
                        .attr("width", 200)
                        .attr("height", 200) ;
                        
                        
var lineGraph = svgcontainer.append("path")
                    .attr("d", lineFunction(lineData))
                    .attr("stroke", "blue")
                    .attr("stroke-width", 2)
                    .attr("fill", "none");                        