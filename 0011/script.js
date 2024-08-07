var datos = []


function cargarDatos() {
    d3.json('datos.json')
                .then( function (data) {
                    console.log(data)
                    datos = data;
                    graficar();
                })
            }


        function graficar () {
            var width = 300;
            var height = 300;

            var radius = Math.min(width, height) / 2;

            var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

            var color = d3.scaleOrdinal()
                .range(["Brown", "Aquamarine", "Azure", "AliceBlue", "Beige", "BlanchedAlmond", "Cornsilk", "CornflowerBlue", "Coral", "Crimson", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkOrchid", "DarkMagenta", "DarkTurquoise", "DeepSkyBlue", "Gainsboro", "DodgerBlue"]);


            //const pie = d3.pie().value((d) => d.ranking);
            //const arcs = pie(datos);

            /*
            svg.append("path")
                .attr("transform", "translate(150,150)")
                .attr("d", d3.arc()({
                    innerRadius: 100,
                    outerRadius: 50,
                    padAngle: 0,
                    startAngle: -Math.PI / 1,
                    endAngle: Math.PI / 1
                }));
                */

                const arcs = d3.pie()(datos.map((d) => d.edad));


                svg.append("path")
                .attr("transform", "translate(150,150)")
                .attr("d", arcs);

            

                /*
            var arc = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);

            var pie = d3.pie()
                    .value(function (d) {
                        return d.ranking;
                    });*/

/*
            var svg = d3.select("body").append("svg")
                    .attr("widtg", width)
                    .attr("height", height)
                    .append("g")


            var g = svg.selectAll("arc")
                    .data(pie(datos.ranking))
                    .enter()
                    .attr("class", "arc");
            */

        }