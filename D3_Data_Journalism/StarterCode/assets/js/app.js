// set SVG height and width

var svgWidth = 960;
var svgHeight = 600; 

var margin = {
    top: 40, 
    right: 40,
    bottom: 100, 
    left: 100, 

};

var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Create SVG wrapper

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox","0 0 960 600")
    .classed("chart", true); ;

// Append SVG group

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Get data from csv file

d3.csv("assets/data/data.csv").then(function(censusData){
    console.log('Actual Data:', censusData)

        censusData.forEach(function(data) {
            data.poverty = +data.poverty ;
            data.age = +data.age ;
            data.income = +data.income ;
            data.healthcare = +data.healthcare ;
            data.obesity = +data.obesity ;
            data.smokes = +data.smokes ;
    });

    
    console.log('parsed data:', censusData)

  //Set default x and y values
    var xValue = "poverty" ;
    var yValue = "healthcare" ;

  // Call the function to calculate xScale and YScale for default x and y values
    xyScales = createScales(censusData, xValue, yValue) ;

  //Get Xscale and YScale
    xScale = xyScales[0];
    yScale = xyScales[1]; 

    // create axes with d3

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    var xGroup = chartGroup.append("g").classed("xaxis", "true")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(xAxis);

    var yGroup = chartGroup.append("g").classed("yAxis", "true")
        .call(yAxis);
    }
);