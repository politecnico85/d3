const width = 960;
const  height = 500;

const x_scale = d3.scaleBand().range([0, width]).padding(0.15);
const y_scale = d3.scaleLinear().range([height,0]);


const svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

d3.json("https://gist.githubusercontent.com/yitzikc/0a1ef7fa6320250a7a3a8885ff9e91a1/raw/03be16ff90dacb5bc29a8454da5780140b5e1d05/us-states.json").then(( data ) => {
   //data.forEach((d) => (console.log(d.Population) ))

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
        .attr("height", (d) => height - y_scale(d.Population));

   //console.log(data);
})