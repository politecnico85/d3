const width = 490;
const height = 590;
var currentX = 150;
var currentY = 150;



let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


    function drawCircle(radius, color){
        svg.append("circle")
        .attr("cx", currentX)
        .attr("cy", currentY)
        .attr("r",radius)
        .style("fill", color)
        .style("opacity", 0.20);
    }

   function getRandom(n){
        return Math.floor(Math.random() * n);
   }

    function drawCircles(){
        for (let i=1; i<10; i++){
            drawCircle(getRandom(100), "red")
            //console.log();
            currentX += i*8;
            currentY += i*7
        }
    }