margin = {top: 20, right: 40, left: 30, bottom: 30 }
width = 450 - margin.left - margin.right;
height = 400 - margin.top - margin.bottom;


var c_scale = d3.scaleSequential()
        .interpolator(d3.interpolateHsl("Red", "Blue", "Yellow"))
        .domain([5, 70]);

var svg = d3.select("#container")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left+ "," + margin.top + ")");


var x = d3.scaleLinear()
        .domain([0,100])
        .range([0, width]);

svg.append("g")
        .attr("transform", "translate(0," + height + ")")  
        .call(d3.axisBottom(x))      

var y = d3.scaleLinear()
        .domain([0,100])
        .range([height, 0]);

svg.append("g")
        .call(d3.axisLeft(y));


d3.json("notas.json").then((data)   => {
    console.log(data);
    svg.selectAll("whatever")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", (d) => d.nota * 20)
        .attr("cy", (d) => d.ranking * 2)
        .attr("r", (d) => d.nota * 3)
        .style("fill", (d) => c_scale(d.ranking))
})

