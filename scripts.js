/**
 * @author Harry Stevens
 */

/*
 * Project Steps
 * 
 * 1. Set up document ready
 * 
 * 2. Load Google charts package
 * 
 * 3. Load data
 * 
 * 4. Render chart
 */

//document ready function
$(document).ready(pageLoaded);

function dataLoaded(uempData){
	
	//to create my visualization I need to convert my JSON data to an array
	//of arrays using a for loop.
	
	var myObsArray = uempData.observations;
	
	//console.log(myObsArray);
	
	var myDataList = [];
	
	var myHeader = ["Date", "Unemployment"];
	
	myDataList.push(myHeader);
	
	for(var i=0; i<myObsArray.length; i++){
		var myObsObj = myObsArray[i];
		var myDataArray = [myObsObj.date, Number(myObsObj.value)];
		myDataList.push(myDataArray);
	}
	
	
	
	console.log(myDataList);
	
	
	var options = {
          title: 'Long-term Unemployment 1980-present'
        };
	
	//data table object
	var myDataTable = google.visualization.arrayToDataTable(myDataList);
	
	//document.getElementById is same as $("#divName")
	var myChart = new google.visualization.LineChart(document.getElementById('myChartDiv'));
	

	myChart.draw(myDataTable, options);
}

function pageLoaded(){
	console.log("page done");

	//load Google charting package
	google.load("visualization", "1", {packages:["corechart"], "callback":googleVizLoaded});
	
}//end pageLoaded

function googleVizLoaded(){
	console.log("viz loaded");
	
	$.get("UEMP270V_data.json", dataLoaded, "json");
}
