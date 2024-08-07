
var currentX = 100;
var currentY = 100;

const svg = d3.select('body')
            .append("svg");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  

function dibujarVariosCirculos(){
    for (let i=1; i<5; i++){
        drawCircle(getRandomInt(i*30), "red")
    }
    drawCircle(getRandomInt(100), "red")
    //drawCircle(getRandomInt(100), "blue")
    //drawCircle(getRandomInt(100), "cyan")

    console.log(getRandomInt(100));
}

function drawCircle(radius,  color) {
    svg
        .append("circle")
        .attr("fill", color)
        .attr("r", radius)
        .attr("cx", currentX)
        .attr("cy", currentY)
        .attr("opacity", 0.5);

    svg.append("text")
        .text(radius)
        .attr("fill", "black")
        .attr("x", currentX)
        .attr("y", currentY)
        .attr("font-size")

    currentX +=100;
    currentY +=30;

}

function dibujar () {
    for (let i=0; i++; i<10){
        drawCircle(getRandomInt(i), setBg);
    }
}