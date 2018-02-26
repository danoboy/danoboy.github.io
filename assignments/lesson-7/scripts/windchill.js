// windchill calculation
  var high = 89;
  var low = 72;
  var speed = 5;
  var average = (high + low)/2;
  var windChill = 35.74 + 0.6215 * average - 35.75 * Math.pow(speed, 0.16) + 0.4275 * average * Math.pow(speed, 0.16);
  windChill = Math.round(windChill);
  document.getElementById("windChill").innerHTML= windChill;