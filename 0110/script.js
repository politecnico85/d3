const datos = [150,  300, 390, 400, 445, 580, 680, 675, 700,  740, 900, 850,  895, 485, 850].sort();

const width = 500, barHeight = 20, margin = 1;
const colorA = "purple", colorB = "orange";

const svg  = d3.select("#grafico")
                .append("svg")
                .attr("id", "escala")
                .attr("width", width)
                .attr("height", barHeight * datos.length);

function obtenerEscala(id, colorA, colorB, colorC){
    console.log(escala);
    switch(id){
        case 1: return d3.interpolateRgb("Red", "Blue");
        break;
        case 2: return d3.interpolateRgb("Red", "Blue");
                break;
        case 3: return d3.interpolateCubehelix(colorA, colorB);
                break;
        case 4: return d3.interpolateHsl(colorA, colorB);
                break;
        case 5: return d3.interpolateHsl(colorA, colorB);
                break;
        default:
                return d3.interpolateCubehelix(colorA, colorB);
    }
}

function dibujarEscala(contenedor, escala){
    //let interpolator = obtenerEscala(escala, "purple","orange", "red");
   // console.log(colorA);
    //drawScala(contenedor, d3.interpolateLab("Red", "Blue"));
    if (escala == 1){
        drawScala(contenedor, d3.interpolateHsl(colorA, colorB));
    } else if (escala == 2) {
        drawScala(contenedor, d3.interpolateLab("Red", "Blue"));
    } else if (escala == 3) {
        drawScala(contenedor, d3.interpolateRgb(colorA, colorB));
    } else if (escala == 4) {
        drawScala(contenedor, d3.interpolateHslLong(colorA, colorB));
    }
    else {
        drawScala(contenedor, d3.interpolateCubehelix(colorA, colorB));
    }
    
    
    
}                

function drawScala(contenedor, interpolator){
        var cScale = d3.scaleSequential()
        .interpolator(interpolator)
        .domain([d3.min(datos), d3.max(datos)]);
    
    const xScale = d3.scaleLinear()
        .domain([d3.min(datos), d3.max(datos)])
        .range([100, 500]);


    let g = svg.selectAll("g")
        .data(datos)
        .join("g")
        .attr("transform", function (d, i) {
            return "translate(0," + i * barHeight + ")";
        })

    g.append("rect")
        .attr("width", (d) => { return xScale(d)} )
        .attr("height", barHeight - margin  )
        .style("fill", (d) => cScale(d) )
}