const data =  d3.csv("1000_richest_people_in_the_world.csv")

console.log(data)

const columns = ['Name', 'Country', 'Industry', 'Net Worth (in billions)', 'Company'];

function createHtmlTable(data, columns){
    var table = d3.select("body").append("table");

    var thead = table.append("thead")
    var tbody = table.append("tbody")

    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function(c) {return c});


    var rows = tbody
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr");
        //.text(function (d) { return d})

   var cells = rows.selectAll("td")
            .data(function (row){
                return columns.map(function (column) {
                    return {column: column, value: row[column]}
                })
            })
            .enter()
            .append("td")
            .text(function (d) { return d.value})
    

}



d3.json("1000_richest_people_in_the_world.json").then((data) => 
    { 
        console.log(data);
        createHtmlTable(data, columns);
    })