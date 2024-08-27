

const margin = {top: 20, bottom: 30, right: 55, left:70};

const width = document.querySelector("body").clientWidth, height = 500;

//const svg = d3.select("#d3_container").append("svg").attr("viewbox", [0,0,width,height]);
const svg = d3.select("#d3_container").append("svg")
            .attr("width", width)
            .attr("height", height+70);

svg.append("text")
    .attr("x", width /2)
    .attr("y", margin.top)
    .attr("text-anchor", "middle")
    .style("font-size","22px" )
    .style("text-decoration", "underline")
    .text("USA States Population");


const x_scale = d3
        .scaleBand()
        .range([margin.left, width, margin.right])
        .padding(0.2);


const y_scale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

let x_axis = d3.axisBottom(x_scale);

let y_axis = d3.axisLeft(y_scale);

d3.json("https://gist.githubusercontent.com/yitzikc/0a1ef7fa6320250a7a3a8885ff9e91a1/raw/03be16ff90dacb5bc29a8454da5780140b5e1d05/us-states.json").then( ( data ) => {
    //data.forEach(element => {
    //    console.log(element.Population / 10);
    //});

    x_scale.domain(data.map((d) => d.State));
    y_scale.domain([0, d3.max(data, (d) => d.Population)]);


    svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x_scale(d.State))
        .attr("y", (d) => y_scale(d.Population))
        .attr("width", x_scale.bandwidth())
        .attr("height", (d) => height - margin.bottom - y_scale(d.Population));


    svg
        .append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(x_axis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.20em")
        .attr("dy", ".25em")
        .attr("transform", "rotate(-65)");

    svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(y_axis);


 })
    



