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

        censusData.forEach(function(data){
            data.poverty = +data.poverty ;
            data.age = +data.age ;
            data.income = +data.income ;
            data.healthcare = +data.healthcare ;
            data.obesity = +data.obesity ;
            data.smokes = +data.smokes ;
        });
})