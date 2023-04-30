var startTime;
var elapsedTime = 0;
var timerInterval;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}

function updateTime() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  var minutes = Math.floor(time / 60000);
  var seconds = Math.floor((time % 60000) / 1000);
  var milliseconds = Math.floor((time % 1000) / 10);
  return padNumber(minutes) + ":" + padNumber(seconds) + ":" + padNumber(milliseconds);
}

function padNumber(number) {
  return (number < 10 ? "0" : "") + number;
}