const width = 490;
const height = 100;
var currentX = 50;
var currentY = 50;


let frutas = ['Manzana', 'Pera', 'Futilla', 'Mango', 'Banana', 'Naranja', 'Mandarina', 'Sandia', 'Papaya'];


let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    
    svg
    .append("circle")
    .attr("cx", currentX)
    .attr("cy", currentY)
    .attr("r", 50)
    .style("fill", "purple");

let bodySelection = d3.select("body")

let contenedor = bodySelection.append("div").attr("id", "container");

let ul_lista = contenedor.append("ul").attr("id", "lista_frutas")
let li_lista = d3.select("#lista_frutas");

                li_lista
                .selectAll("li")
                .data(frutas)
                .enter()
                .append("li")
                .text((d)=> d)