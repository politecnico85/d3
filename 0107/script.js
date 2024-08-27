let info = [5,20,15,30,45,18,50,69];

//var svg = d3.select("body").append("svg").attr("width", 500).attr("height", 500);
let svg = d3.select("body")

svg
    .selectAll("p")
    .data(info)
    .enter()
    .append("p")
    .text((d, i) => {return  "i="+i + " d="+d})