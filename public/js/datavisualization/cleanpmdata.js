sensorURL = "http://sensorwebsite-dev2.us-east-1.elasticbeanstalk.com/air/pm2/42002f001051353532343635";

function getData(dataType, sensorURL){
  $.ajax({
       url: sensorURL,
       type: 'get',
       cache: false,
       success: function (response) {
           console.log(response);
       }
  });
}
