const div = d3.select("body")
    .selectAll('div')
    .data([3,6,9,12,15,18,21,24,27])
    .enter()
    .append('p')
    .text(d => d)
    .on("click", (event) => console.log(event));