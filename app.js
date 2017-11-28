google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['sprint', 'Puntaje'],
    ["S1", 44],
    ["S2", 40],
    ["S3", 31],
    ["S4", 12],
  ]);

  var options = {
    width: 800,
    legend: { position: 'none' },
    axes: {
      x: {
        0: { side: 'botoom'} // Top x-axis.
      }
    },
    bar: { groupWidth: "80%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};
console.log(data);
var arr = Object.keys(data);
var arr2 = Object.values(data)
var arr3 = Object.values(data)[0]

console.log(data.AQP);
