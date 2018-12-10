function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  min = checkTime(min);
  sec = checkTime(sec);

  document.getElementById('clock').innerHTML =  hour + ":" + min + ":" + sec;

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
