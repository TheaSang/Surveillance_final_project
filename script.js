// console.log("js loaded.hello");
// // console.log(document.getElementById("viz-container"));
// let w = "100%";
// let h= "100%";
// let axiswidth = "60%";
// let yxiswidth = "100%";
// let yPadding = 400;
// let xPadding = 150;
// let demographicviz = d3.select("#demographic-container")
//     .append("svg")
//     .attr("id","demographicviz")
// ;
// demographicviz
//     .attr("width",w)
//     .attr("height",h)
//
// ;
// let bgRect = demographicviz.append("rect").attr("id","backgroundrect")
//     .attr("width", "100%")
//         .style("fill","black").style("opacity", 0.75);
//
// demographicviz.append("text").text("Total Population and Governmental Drones (New York State)")
//     .style("fill","white")
//     .attr("x","20%")
//     .attr("y","6%")
//     .attr("id","demotitle1")
// ;
//
// //////////////////demographic 2
// let demographicviz2 = d3.select("#demographic-container2")
//     .append("svg")
//     .attr("id","demographicviz2")
// ;
// demographicviz2
//     .attr("width",w)
//     .attr("height",h)
//
// ;
// let bgRect2 = demographicviz2.append("rect").attr("id","backgroundrect2")
//     .attr("width", "100%")
//     .style("fill","black").style("opacity", 0.75);
//
// demographicviz2.append("text").text("Racial Makeup and Governmental Drones (New York State)")
//     .style("fill","white")
//     .attr("x","20%")
//     .attr("y","6%")
//     .attr("id","demotitle2")
// ;
//
//
//
// let xAxisGroupContainer = demographicviz.append("svg").attr("id","xAxisGroupbox").attr("height","100%")
//     .attr("width","100%")
//     .style("stroke", "white")
//
// ;
// xAxisGroupContainer.append("text").text("Total Population")
//     .style("fill","white")
//     .attr("x","82%")
//     .attr("y","90%")
//     .attr("id","xAxisLable1")
//
//     ;
//     // .style("background-color","black");
// let yAxisGroupContainer = demographicviz.append("svg").attr("id","yAxisGroupbox").attr("height","100%")
//     .attr("width",axiswidth)
//     .attr("height",yxiswidth)
//     .style("stroke", "white")
// ;
//     // .style("background-color","black");
// yAxisGroupContainer.append("text").text("Governmental Drones")
//     .style("fill","white")
//     .attr("x","20%")
//     .attr("y","12%")
//     .attr("id","yAxisLable1")
//
// ;
// let xAxisGroupContainer2 = demographicviz2.append("svg").attr("id","xAxisGroupbox2").attr("height","100%")
//     .attr("width","100%")
//     .style("stroke", "white")
//
// ;
//
// xAxisGroupContainer2.append("text").text("non-White Proportion")
//     .style("fill","white")
//     .attr("x","79%")
//     .attr("y","90%")
//     .attr("id","xAxisLable2")
//
// ;
// // .style("background-color","black");
// let yAxisGroupContainer2 = demographicviz2.append("svg").attr("id","yAxisGroupbox2").attr("height","100%")
//     .attr("width",axiswidth)
//     .attr("height",yxiswidth)
//     .style("stroke", "white")
// ;
// yAxisGroupContainer2.append("text").text("Governmental Drones")
//     .style("fill","white")
//     .attr("x","20%")
//     .attr("y","12%")
//     .attr("id","yAxisLable2")
//
// ;
// function randomX(){
//     return Math.random()*800
// }
// function randomY(){
//     return Math.random()*500
// }
// function gotData(incomingData){
//     console.log(incomingData);
//     let nyData = [{county:"clintoncounty",population:79843,white:0.93,nonwhite:0.07,drones:1},{county:"stlawrencecounty",population:108505,white:0.96,nonwhite:0.04,drones:3},
//         {county:"saratogacounty",population:235509,white:0.93,nonwhite:0.07,drones:7},{county:"fultoncounty",population:53324,white:0.96,nonwhite:0.04,drones:2},{county:"montgomerycounty",population:49532,white:0.89,nonwhite:0.11,drones:1},
//             {county:"yatescounty",population:24774,white:0.98,nonwhite:0.02,drones:1}, {county:"westchestercounty",population:1004457,white:0.6,nonwhite:0.4,drones:67},{county:"washingtoncounty",population:61302,white:0.95,nonwhite:0.05,drones:9},
//             {county:"ulstercounty",population:181851,white:0.85,nonwhite:0.15,drones:3},{county:"suffolkcounty",population:1525920,white:0.74,nonwhite:0.26,drones:34},{county:"steubencounty",population:93584,white:0.95,nonwhite:0.05,drones:5},
//             {county:"senecacounty",population:33814,white:0.93,nonwhite:0.07,drones:1},{county:"saratogacounty",population:235509,white:0.93,nonwhite:0.07,drones:8},{county:"rocklandcounty",population:338329,white:0.69,nonwhite:0.31,drones:9},
//             {county:"rensselaercounty",population:161130,white:0.85,nonwhite:0.15,drones:2},{county:"queenscounty",population:2405464,white:0.29,nonwhite:0.71,drones:19},{county:"oswegocounty",population:117525,white:0.96,nonwhite:0.04,drones:5},
//             {county:"orleanscounty",population:40343,white:0.94,nonwhite:0.06,drones:3},{county:"orangecounty",population:401310,white:0.69,nonwhite:0.31,drones:6},{county:"ontariocounty",population:112458,white:0.93,nonwhite:0.07,drones:1},
//             {county:"onondagacounty",population:476516,white:0.8,nonwhite:0.2,drones:9},{county:"oneidacounty",population:232125,white:0.85,nonwhite:0.15,drones:23},{county:"niagaracounty",population:212666,white:0.88,nonwhite:0.12,drones:4},
//             {county:"nassaucounty",population:1395774,white:0.64,nonwhite:0.36,drones:36},{county:"monroecounty",population:759443,white:0.74,nonwhite:0.26,drones:14},{county:"kingscounty",population:2736074,white:0.41,nonwhite:0.59,drones:14},
//             {county:"greenecounty",population:47931,white:0.91,nonwhite:0.09,drones:1},{county:"essexcounty",population:37381,white:0.95,nonwhite:0.05,drones:2},{county:"eriecounty",population:954236,white:0.77,nonwhite:0.23,drones:6},
//             {county:"dutchesscounty",population:295911,white:0.77,nonwhite:0.23,drones:1},{county:"columbiacounty",population:61570,white:0.9,nonwhite:0.1,drones:3},{county:"chemungcounty",population:84148,white:0.9,nonwhite:0.1,drones:5},
//             {county:"broomecounty",population:198683,white:0.86,nonwhite:0.14,drones:13},{county:"albanycounty",population:314848,white:0.74,nonwhite:0.26,drones:217}];
//
//
//
// //
// // draw y axis
//     function maxPopulation(data) {
//         let populations = data.map(d => d.population); // extract all population values into an array
//         return Math.max(...populations); // apply Math.max to the array using the spread operator
//     }
//     function minPopulation(data) {
//         let populations = data.map(d => d.population); // extract all population values into an array
//         return Math.min(...populations); // apply Math.max to the array using the spread operator
//     }
//     console.log(maxPopulation(nyData));
//     console.log(minPopulation(nyData));
//     let xDomain = [minPopulation(nyData), maxPopulation(nyData)];
//     console.log(xDomain);
//     let xScalewidth =100;
//     let widthInPixels =  window.innerWidth * (xScalewidth / 100);
//     let containerwidth = demographicviz.node().getBBox().width;
//     let containerheight = demographicviz.node().getBBox().height;
//     console.log(containerwidth);
//     let xScale = d3.scaleLinear().domain(xDomain).range([xPadding, containerwidth-xPadding]);
//     console.log(xScale(8000));
//     let xAxisGroup = xAxisGroupContainer.append("g").attr("class", "xAxis");
//     let xAxis = d3.axisBottom(xScale);
//     xAxisGroup.call(xAxis);
//     let xAxisXpos = widthInPixels / 2
//
//
//     function maxdrones(data) {
//         let drones = data.map(d => d.drones); // extract all population values into an array
//         return Math.max(...drones); // apply Math.max to the array using the spread operator
//     }
//     function mindrones(data) {
//         let drones = data.map(d => d.drones); // extract all population values into an array
//         return Math.min(...drones); // apply Math.max to the array using the spread operator
//     }
//     let yDomain = [mindrones(nyData), 70];
//     console.log(yDomain);
//     let yScaleheight = 70;
//     let heightInPixels =  window.innerHeight * (yScaleheight / 100);
//     let yScale = d3.scaleLinear().domain(yDomain).range([containerheight-yPadding,yPadding]);
//     console.log(yScale(50))
//     let yAxisGroup = yAxisGroupContainer.append("g").attr("class", "yAxis");
//     let yAxis = d3.axisLeft(yScale);
//     yAxisGroup.call(yAxis);
//     let yAxisGroupHeight = yAxisGroup.node().getBBox().height;
//     let ypositiony = heightInPixels - yAxisGroupHeight;
//     console.log(ypositiony);
//     yAxisGroup.attr("transform", "translate("+ xPadding+"," + -(containerheight-yPadding*2.8)+")").style("color","white");
//     xAxisGroup.attr("transform", "translate(0, "+ (containerheight-yPadding*1.8) +")").style("color","white");
//
//
//
//
//     demographicviz.selectAll(".datapoint").data(nyData).enter()
//         .append("circle")
//         .attr("cx", d => xScale(d.population))
//         .attr("cy", d => yScale(d.drones)+(-containerheight+yPadding*2.8))
//         .attr("r", 3)
//         .attr("fill","white")
//     ;
//
//     function maxnonwhite(data) {
//         let nonwhite = data.map(d => d.nonwhite); // extract all population values into an array
//         return Math.max(...nonwhite); // apply Math.max to the array using the spread operator
//     }
//     function minnonwhite(data) {
//         let nonwhite = data.map(d => d.nonwhite); // extract all population values into an array
//         return Math.min(...nonwhite); // apply Math.max to the array using the spread operator
//     }
//
//     let xDomain2 = [0, maxnonwhite(nyData)];
//     console.log(xDomain);
//     let xScale2 = d3.scaleLinear().domain(xDomain2).range([xPadding, containerwidth-xPadding]);
//     let xAxisGroup2 = xAxisGroupContainer2.append("g").attr("class", "xAxis2");
//     let xAxis2 = d3.axisBottom(xScale2);
//     xAxisGroup2.call(xAxis2);
//     xAxisGroup2.attr("transform", "translate(0, "+ (containerheight-yPadding*1.8) +")").style("color","white");
//
//     let yAxisGroup2 = yAxisGroupContainer2.append("g").attr("class", "yAxis2");
//     let yAxis2 = d3.axisLeft(yScale);
//     yAxisGroup2.call(yAxis2);
//     yAxisGroup2.attr("transform", "translate("+ xPadding+"," + -(containerheight-yPadding*2.8)+")").style("color","white");
//
//     demographicviz2.selectAll(".datapoint").data(nyData).enter()
//         .append("circle")
//         .attr("cx", d => xScale2(d.nonwhite))
//         .attr("cy", d => yScale(d.drones)+(-containerheight+yPadding*2.8))
//         .attr("r", 3)
//         .attr("fill","white")
//     ;
// }
//
// d3.json("joinedSurRaceSimple.json").then(gotData);
//
//
