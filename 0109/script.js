const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

margin = {
    top : 20, 
    right: 20, 
    bottom: 30,  
    left: 40
};

width = 640;
height = 400;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
        .domain([new Date("2023-01-01"), new Date("2024-01-01")])
        .range([margin.left, width - margin.right]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
            .domain([0, 100])
            .range([height - margin.bottom, margin.top]);

// Create the SVG container.
/*const svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height);
 */
const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height);
        
 
svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));
           
// Axis x-axis                
/*svg.append("g")
    .attr("trasnform", `translate(0,${height - marginBottom})`)                
    .call(d3.axisBottom(x));*/



/*
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));*/


//Axis y-axis

svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

    container.append(svg.node());   


