
var map;

var marker5;
var table;
var row;
var cell1;
var cell2;
var cell3;
var cell4;
var cell5;


function populateTable(markerName, markerAvailabele, markerTotal) {

    console.log(markerName);
    console.log(markerAvailabele);
    console.log(markerTotal);

    cell1.innerHTML = " Bus Due count ";
    cell2.innerHTML = " " + markerAvailabele + " ";
    cell3.innerHTML = " Average Waiting Time at the Stop ";
    cell4.innerHTML = " " + markerTotal + " ";
    cell5.innerHTML = " " + markerName + " ";
}

function makeTable() {

  var table = document.getElementById('table');
//   request = new XMLHttpRequest();
//   request.open('GET', 'http://ec2-34-243-117-230.eu-west-1.compute.amazonaws.com:8080/wait/time', true);
 
// //   request.onload = function() {
//     // Success!
//     var data = JSON.parse(request.responseText);
//    // select = document.getElementById('myList');
//     console.log(datas);
// }


  // for (var i = -1; i < 10; i++) {
    var row = document.createElement('tr');
    // for (var j = 0; j < 2; j++) {
    //   if(i==-1)
    //   {
    //     if(j == 0)
    //     {
          var cell = document.createElement('td');
          cell.textContent = 'Station ID';
          row.appendChild(cell);
          cell.style.width = '100px';
          cell.style.fontWeight = 'bold'
        // }
        // else
        // {
          var cell = document.createElement('td');
          cell.textContent = 'Waiting Time';
          row.appendChild(cell);
          cell.style.width = '100px';
          cell.style.fontWeight = 'bold'
      //   }

      // }
      // else
      // {
table.appendChild(row);
    
    var row = document.createElement('tr');
        var cell = document.createElement('td');

        cell.textContent = 345;
        row.appendChild(cell);
        cell.style.width = '100px';
           // console.log("Eroor"+redder)
       //   }
       // }
     var cell = document.createElement('td');

        cell.textContent = 39;
        row.appendChild(cell);
        cell.style.width = '100px';

     table.appendChild(row);

     var row = document.createElement('tr');
        var cell = document.createElement('td');

        cell.textContent = 101;
        row.appendChild(cell);
        cell.style.width = '100px';
           // console.log("Eroor"+redder)
       //   }
       // }
     var cell = document.createElement('td');

        cell.textContent = 35;
        row.appendChild(cell);
        cell.style.width = '100px';
        
     table.appendChild(row);

     var row = document.createElement('tr');
        var cell = document.createElement('td');

        cell.textContent = 6004;
        row.appendChild(cell);
        cell.style.width = '100px';
           // console.log("Eroor"+redder)
       //   }
       // }
     var cell = document.createElement('td');

        cell.textContent = 35;
        row.appendChild(cell);
        cell.style.width = '100px';
        
     table.appendChild(row);

     var row = document.createElement('tr');
        var cell = document.createElement('td');

        cell.textContent = 7009;
        row.appendChild(cell);
        cell.style.width = '100px';
           // console.log("Eroor"+redder)
       //   }
       // }
     var cell = document.createElement('td');

        cell.textContent = 33;
        row.appendChild(cell);
        cell.style.width = '100px';
        
     table.appendChild(row);

     var row = document.createElement('tr');
        var cell = document.createElement('td');

        cell.textContent = 15;
        row.appendChild(cell);
        cell.style.width = '100px';
           // console.log("Eroor"+redder)
       //   }
       // }
     var cell = document.createElement('td');

        cell.textContent = 29;
        row.appendChild(cell);
        cell.style.width = '100px';
        
     table.appendChild(row);
// }
   return table;
 }

function openNav(markerName, markerAvailabele, markerTotal) {

  populateTable(markerName, markerAvailabele, markerTotal);
  document.getElementById("mySidenav").style.display = "block";

 google.charts.setOnLoadCallback(drawBasic(markerName));
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

function drawBasic(markerName) {
  // var data = new google.visualization.DataTable();

  // data.addColumn('timeofday', 'Time of Day');
  // data.addColumn('number', 'Motivation Level');

  // data.addRows([
  //   [{v: [8, 0, 0], f: '8 am'}, 1],
  //   [{v: [9, 0, 0], f: '9 am'}, 2],
  //   [{v: [10, 0, 0], f:'10 am'}, 3],
  //   [{v: [11, 0, 0], f: '11 am'}, 4],
  //   [{v: [12, 0, 0], f: '12 pm'}, 5],
  //   [{v: [13, 0, 0], f: '1 pm'}, 6],
  //   [{v: [14, 0, 0], f: '2 pm'}, 7],
  //   [{v: [15, 0, 0], f: '3 pm'}, 8],
  //   [{v: [16, 0, 0], f: '4 pm'}, 9],
  //   [{v: [17, 0, 0], f: '5 pm'}, 10],
  //   ]);

  // var options = {
  //   title: markerName,
  //   hAxis: {
  //     title: 'Time of Day',
  //     format: 'h:mm a',
  //     viewWindow: {
  //       min: [7, 30, 0],
  //       max: [17, 30, 0]
  //     }
  //   },
  //   vAxis: {
  //     title: 'Rating (scale of 1-10)'
  //   }
  // };

  // var chart = new google.visualization.ColumnChart(
  //   document.getElementById('chart_div'));

  // chart.draw(data, options);
}



function initialize() {
google.charts.load('current', {packages: ['corechart', 'bar']});

  table = document.getElementById("bikeStationTable");
  row = table.insertRow(0);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  row = table.insertRow(0);
  cell3 = row.insertCell(0);
  cell4 = row.insertCell(1);
  row = table.insertRow(0);
  cell5 = row.insertCell(0);

	var mapOptions = {
		zoom:12,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: {lat: 53.353584, lng: -6.251495}
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
	//directionsDisplay.setMap(map);
	//directionsDisplay2.setMap(map);

  showHeatMap();
	showJson();
	makeTable();
}

function showJson()
{
 
  request = new XMLHttpRequest();
  request.open('GET', 'http://ec2-34-243-117-230.eu-west-1.compute.amazonaws.com:8080/poll/bus/data', true);
 
  request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    var data = JSON.parse(request.responseText);
   // select = document.getElementById('myList');
    //console.log(data);
    for(var i = 0; i < data.length; i++) {

    (function(datas){
      if(parseInt(datas.stopid) < 100100)
    {
    // var obj = mydata[key];
    // console.log("obj");
    // console.log(obj);
    var start = {lat: parseFloat(datas.lattitude), lng: parseFloat(datas.longitude)};
     if(datas.due_count == 0)
     {
      marker5 = new google.maps.Marker({

     icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: "#20B2AA",
        fillOpacity: 0.9,
        strokeWeight: 0.1
       },
        
        position: start,
        map: map
      });
       google.maps.event.addListener(marker5, 'click', function () {
                openNav(datas.stopid, datas.due_count, datas.waiting_time);
                //infoWindow.setContent(this.content + '<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>');
                //infoWindow.open(this.getMap(), this);
                            
        });
     }
     else
     {
      marker5 = new google.maps.Marker({

         icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: "#FF0000",
        fillOpacity: 0.9,
        strokeWeight: 0.1
         },
        
        position: start,
        map: map
    
      });
            google.maps.event.addListener(marker5, 'click', function () {
                openNav(datas.stopid, datas.due_count, datas.waiting_time);
                //infoWindow.setContent(this.content + '<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>');
                //infoWindow.open(this.getMap(), this);
                            
        });
     
     }
     

   }
     
  } )(data[i]);

    // }
}
  } else {
    // We reached our target server, but it returned an error
    console.log("Server returned error")

  }
};
request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
  //console.log(mydata);
  // alert(mydata[0].location);
  
  
}




function showHeatMap()
{
	map2 = L.map('heatmap-canvas').setView([53.343584,-6.261495], 13);
	mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
	L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; ' + mapLink + ' Contributors',
			maxZoom: 23,
		}).addTo(map2);

	// request = new XMLHttpRequest();
 //  request.open('GET', 'http://ec2-34-243-117-230.eu-west-1.compute.amazonaws.com:8080/poll/bus/data', true);
  var array = [];

  var heatpoints = [];
  window.stationname = [];
  // request.onload = function() {


$.getJSON('http://ec2-34-243-117-230.eu-west-1.compute.amazonaws.com:8080/poll/bus/data', function(data) {

    var myJsonString = JSON.stringify(data);


    var mydata1 = JSON.parse(myJsonString);
    for(var i = 0; i < mydata1.length; i++) {
      if(parseInt(mydata1[i].stopid) < 100100)
      {
    // var obj = mydata[key];
    // console.log("obj");
    // console.log(obj);
    var start = {lat: parseFloat(mydata1[i].lattitude), lng: parseFloat(mydata1[i].longitude)};
    // console.log(i);
    if(mydata1[i].due_count == 0)
    {
      // console.log("Inside due count loop1");
      array.push([parseFloat(mydata1[i].lattitude), parseFloat(mydata1[i].longitude),0.5]);
    }
    else
    {
      // console.log("Inside due count loop2");
      array.push([parseFloat(mydata1[i].lattitude), parseFloat(mydata1[i].longitude),parseFloat(mydata1[i].due_count)+0.5]);
    }
  }
}

 });
  // console.log(array);
  var heat = L.heatLayer(array
    ,{
      radius: 18,
      blur: 15, 
      maxZoom: 10,
    }).addTo(map2);

// };

// request.onerror = function() {
//   // There was a connection error of some sort
// };

// request.send();
//   //console.log(mydata);
//   // alert(mydata[0].location);
  

}

function logout()
{
	window.location = "Login.html";
}


//google.maps.event.addDomListener(window, 'load', initialize);

