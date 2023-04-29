console.log("js loaded.hello");
// console.log(document.getElementById("viz-container"));
let w = 1400;
let viz = d3.select("#viz-container")
    .append("svg")
    .attr("id","viz")
;
viz.attr("height",600)
    .attr("width",w)
    // .style("background-color","lavender")
;


// let myCircle = test.append("circle")
//     .attr("cx",200)
//     .attr("cy",300)
;

function randomX(){
    return Math.random()*800
}
function randomY(){
    return Math.random()*500
}
function gotData(incomingData){
    console.log(incomingData);
    // viz.selectAll(".datapoint").data(incomingData).enter()
    //     .append("circle")
    //     .attr("cx", randomX)
    //     .attr("cy", randomY)
    //     .attr("r", 2)
    //     .attr("fill","white")
    // ;
    let yearToDateObjectConverter = d3.timeParse("%Y");
    let test = yearToDateObjectConverter("2007");
    console.log(test);
    function mappingFunction(datapoint){
        datapoint.Plantjaar = yearToDateObjectConverter(datapoint.Plantjaar);
        return datapoint;


    }
    // incomingData.forEach(function(datapoint) {
    //     console.log(datapoint.Plantjaar);
    // });

    let NewTimeData=incomingData.map(mappingFunction)
    console.log(NewTimeData);
    function findYear(datapoint){
        return datapoint.Plantjaar
    }
    let minTime =d3.min(NewTimeData,findYear);
    console.log(minTime);
    let maxTime =d3.max(NewTimeData,findYear);
    console.log(maxTime);
    let xDomain = [minTime, maxTime];
    console.log(xDomain);
    let xScale = d3.scaleTime().domain([minTime,maxTime]).range([1,w]);
    console.log(xScale(yearToDateObjectConverter("1995")));

    //x axis
    let xAxisGroup = viz.append("g").attr("class", "xAxis");
    let xAxis = d3.axisBottom(xScale);
    xAxisGroup.call(xAxis);
    let xAxisYpos = 510;
    xAxisGroup.attr("transform","translate(50, "+xAxisYpos+")");
    // let yearFreq = d3.rollup(NewTimeData, v => v.length, d => d.Plantjaar);
    let yearFreq = d3.rollup(NewTimeData, v => v.length, d => d.Plantjaar.getFullYear());

    // Sort the data based on the year
    let sortedYearFreq = new Map([...yearFreq.entries()].sort((a, b) => a[0] - b[0]));

    // Prepare the data for the line generator
    let lineData = Array.from(sortedYearFreq, ([year, value]) => ({Plantjaar: new Date(year, 0), value}));

// create a scale for the y-axis based on the frequency of each year
    let yScale = d3.scaleLinear()
        .domain([0, d3.max(yearFreq.values())])
        .range([500, 0]);

// create the y-axis
    let yAxisGroup = viz.append("g").attr("class", "yAxis");
    let yAxis = d3.axisLeft(yScale);
    yAxisGroup.call(yAxis);
    let yAxisXpos =50;
    yAxisGroup.attr("transform", "translate(" + yAxisXpos + ", 10)");

// create bar

    // Define the histogram function


// Bin the data and calculate the maximum frequency



    let lineGenerator = d3.line()
        .x(d => xScale(d.Plantjaar))
        .y(d => yScale(d.value))
        .curve(d3.curveBasis); // Add this line for a smoother curve

// Prepare the data for the line generator
//     let lineData = Array.from(yearFreq, ([year, value]) => ({Plantjaar: year, value}));

// Append an SVG path element and set its `d` attribute
    viz.append("path")
        .datum(lineData)
        .attr("fill", "none")
        .attr("stroke", "darkgreen")
        .attr("stroke-width", 1)
        .attr("class", "line")
        .attr("opacity", 1) // Change the opacity to 1
        .attr("d", lineGenerator)
        .attr("transform", "translate(" + yAxisXpos + ", 10)"); // Add this line for proper positioning









}

d3.json("cleaned_tree.json").then(gotData);


