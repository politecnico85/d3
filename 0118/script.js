var h = 300
var w = 300
var data = [ 
  { "name" : "Circle 1", "cx" : 50, "cy" : 50, "r" : 20 , "fill" : "red"},
  { "name" : "Circle 2", "cx" : 100, "cy" : 100, "r" : 30 , "fill" : "blue"},
  { "name" : "Circle 3", "cx" : 150, "cy" : 150, "r" : 40 , "fill" : "green"}
]

var svg = d3.select('body').append('svg')
  .attr('height',h)
  .attr('width',w)

var circles = svg.selectAll('circle')
    .data(data)
    .enter()
  .append('circle')
    .attr('cx', function (d) { return d.cx })
    .attr('cy', function (d) { return d.cy })
    .attr('r', function (d) { return d.r })
    .attr('fill', function (d) { return d.fill })
    .attr('stroke','black')
    .attr('stroke-width',0)
      .on('mouseover',function() {
        d3.select(this)
      	  .transition()
      	  .duration(1000)
      	  .attr('stroke-width',5)
      })
      .on('mouseout',function () {
        d3.select(this)
          .transition()
          .duration(1000)
          .attr('stroke-width',0)
      })