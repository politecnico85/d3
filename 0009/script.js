var datos = [144, 89, 55, 34,21,13,8,5,3,2,1,   1,2,3,5,8,13,21,34,55,89,144];

function graficar(){

    var w = 600;
    var h = 300;

    var svg = d3.select('body')
        .append('svg')
        .attr("width", w)
        .attr("height", h);
        
    
    svg.selectAll("rect")
        .data(datos)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 100)

        .attr("x", function( d, i ) {
            return i * 21 + 50;
        })
        .attr("height", function(d) {
            return d;
        })
        .attr("y", function (d) {
            return h - d;
        })

        svg.selectAll("text")
            .data(datos)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("x", function (d, i) {
                return i * 21 + 58;
            })
            .attr("y", function(d) {
                return h - d - 3;
            })
       


}