let linearScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, 600]);


var sequentialScale = d3.scaleSequential()
        .domain([0,100]);


var interpolators = [
            'interpolateViridis',
            'interpolateInferno',
            'interpolateMagma',
            'interpolatePlasma',
            'interpolateWarm',
            'interpolateCool',
            'interpolateRainbow',
            'interpolateCubehelixDefault'
        ];        

var myData = d3.range(0, 100, 2);
function dots(d) { 
    sequentialScale
        .interpolator(d3[d]);

        d3.select(this)
		.append('text')
		.attr('y', -10)
		.text(d);

        d3.select(this)
		.selectAll('rect')
		.data(myData)
		.join('rect')
		.attr('x', function(d) {
			return linearScale(d);
		})
		.attr('width', 11)
		.attr('height', 30)
		.style('fill', function(d) {
			return sequentialScale(d);
		});

}

d3.select("#wrapper")
   .selectAll("g.interpolator")
   .data(d3.interpolateHsl("orange", "red"))
   .join("g")
   .classed("interpolator", true)
   .attr("transform", function(d,i) {
        return 'translate(0, ' + (i * 70) + ')';
   })
   .each(dots)