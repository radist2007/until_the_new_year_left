document.addEventListener('DOMContentLoaded', function() {
  console.log('Hello from main.js');

  var timeLeftInfo = document.getElementById('result');

  var now = new Date();
  var newYear = new Date();
  console.log(now);
  newYear.setFullYear(now.getFullYear() + 1);
  newYear.setMonth(0);
  // newYear.setDate(now.getDate() + 1);
  newYear.setDate(0);
  // newYear.setHours(now.getHours() + 2);
  newYear.setHours(0);
  // newYear.setMinutes(now.getMinutes() + 3);
  newYear.setMinutes(0);
  // newYear.setSeconds(now.getSeconds() + 4);
  newYear.setSeconds(0);
  console.log(newYear);

  var day = 86400000;
  var hour = 3600000;
  var minute = 60000;
  var second = 1000;
  // ==========================================================
  function getTimeToNowYear(){

    now = new Date();
    var diff = newYear - now;
    // console.log(diff);

    // number of day
    var days = diff/day;
    days = days.toFixed();
    //
    var remainderOfDays = diff % day;
    //
    var hoursWithRemain = remainderOfDays/hour;
    // console.log(hoursWithRemain);
    var hours = hoursWithRemain - 1;
    // console.log(hours)
    hours = hours.toFixed();
    // hours = hoursWithRemain.toFixed();
    // console.log(hours)
    // var hours = hoursWithRemain.toFixed();
    //
    var remainderOfHours = diff % hour;
    //
    var minutesWithRemain = remainderOfHours / minute;
    var minutes = minutesWithRemain.toFixed();
    //
    var remainderOfMinutes = diff % minute;
    //
    var secondsWithRemain = remainderOfMinutes / second;
    var seconds = secondsWithRemain.toFixed();
    //
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    timeLeftInfo.textContent = days + " : " + 
                              hours + " : " + 
                              minutes + " : " + 
                              seconds;
    // console.log('=========================')

  }
  getTimeToNowYear();
  setInterval(getTimeToNowYear, 1000);

});