/*jshint esversion: 6 */

// function alertInfo() {
//   alert('make payment');
// }

function payment() {
  let pay = document.getElementById("payNo");
  pay.classList.remove('paymentNotification');
}

// Unix Time
function chekTime() {
  let timeInSec = Math.round(Date.now() / 1000);
  console.log(timeInSec);
  if (timeInSec > 1557865673) {
    // alertInfo();
    payment();
  }
}

chekTime();