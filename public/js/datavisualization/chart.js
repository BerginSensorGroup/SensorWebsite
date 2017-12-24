var labels = [];
var data = [];

$.getJSON("https://jsonblob.com/api/jsonBlob/26078b70-6b6f-11e7-a38a-bf689f57642c", function(data) {
   var labels = data.customers[0].usage.map(function(e) {
      return e[0];
   });
   var data = data.customers[0].usage.map(function(e) {
      return e[1];
   });

   var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: labels,
         datasets: [{
            backgroundColor: 'rgb(129, 198, 2228)',
            borderColor: 'rgb(0, 150, 215)',
            data: data
         }]
      },
      options: {
         responsive: 'true',
      }
   });
});
