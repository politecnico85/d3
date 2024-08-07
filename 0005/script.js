const data = [
  {name: "Locke", number: 4},
  {name: "Reyes", number: 8},
  {name: "Ford", number: 15},
  {name: "Jarrah", number: 16},
  {name: "Shephard", number: 23},
  {name: "Kwon", number: 42}
];

d3.selectAll("div")
  .data(data, function(d) { return d ? d.name : this.id; })
    .text(d => d.number);


  const div = d3.select("body").append("div").attr("id", "container")
    .selectAll("div")
    .data([4,8,15,16,23,42])
    .enter()
    .append("div")
    .text(d => d);