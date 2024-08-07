const width = 490;
const height = 590;
var currentX = 50;
var currentY = 50;




d3.select("#parrafo_1")
    .text("parrafo")
    .style("color", "green")
    .style("background", "yellow");


d3.select("body")
    .append("p")
    .attr("class", "d3class")
    .text("Parrafo d3class");

d3.select("body")
    .append("p")
    .attr("class", "d3class1")
    .text("Parrafo d3class1");

 d3.select("body")
    .append("p")
    .attr("class", "d3class2")
    .text("Parrafo d3class2")   

d3.select("body")
    .append("p")
    .attr("class", "d3class")
    .text("Parrafo d3class");


d3.selectAll(".d3class").style("color", "red")


///
let fruits = ['Apple', 'Banana', 'Coconut', 'Stawberry'];

/*

d3.select("body").append("ul").attr("class","frutas")
    .data(fruits)
    .enter()
    .append("li")
        .attr("class", "p_fruit")
        .text((d) => d);

*/


d3.select("body").append("ul").attr("class", "frutas").attr("id", "lista_frutas");

ul = d3.select("ul");

ul.selectAll('li')
    .data(fruits)
    .enter()
    .append("li")
    .text((d) => d);


/*
function dibujarCirculo(radius){
   svg.append("body")

        .append("circle")
        .attr("cx", currentX)
        .attr("cy", currentY)
        .attr("r", radius)
        .style("fill", "red");
        
}*/