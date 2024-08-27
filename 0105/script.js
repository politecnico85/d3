let svg = d3.select("#d3_container").append("svg").attr("width", 900).attr("height", 300);
let scale = d3.scaleLinear().domain([0,100]).range([0,200]);
console.log(scale(1));
let botton_axis = d3.axisBottom(scale);

svg.append("g").call(botton_axis);

