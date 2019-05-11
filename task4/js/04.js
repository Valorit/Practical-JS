/*jshint esversion: 6 */


function progressBar(time) {
  time = Math.round(time * 1000 / 100); //convert milliseconds to seconds
  let start = 0;
  let progressElement = document.getElementById('progressBar');
  let intervalId = setInterval(function () {
    if (start > 100) {
      clearInterval(intervalId);
      progressBarCompleted();
    } else {
      progressElement.value = start;
      start++;
    }
  }, time);
}

function progressBarCompleted() { //set any necessary action when filling the progress bar
  document.querySelector('.hidden-element').style.display = 'block';
}
progressBar(3); //progress bar fill time in seconds