var margin = {top: 10, right: 40, bottom: 30, left: 30}, 
width = 450 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


var svg = d3.select("#work_area")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");    



var xScale = d3.scaleLinear()
        .range([0, width]);

var yScale = d3.scaleLinear()
        .range([height/2, 0]);        

d3.json('https://raw.githubusercontent.com/politecnico85/d3/main/data/leagues.json')
    .then((data) =>{
        //console.log(data)

        resumen = data.map((d) => {
            return {
                "name": d.name,
                "season": d.season,
                "average_cards_per_match": d.average_cards_per_match,
                "average_goals_per_match": d.average_goals_per_match,
                "total_goals": d.total_goals
            }
        })

        console.log(resumen);
        console.log( (d) => (  d3.max(d.total_goals)));

        var maxX = d3.max(resumen, function (d) { return +d.total_goals;}) 
         xScale.domain([0, maxX])
        console.log(maxX);      


    })