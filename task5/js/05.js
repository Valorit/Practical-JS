/*jshint esversion: 6 */

document.getElementById('result').onclick = getResult;

getResult();

function getResult() {
  let menu = document.getElementsByClassName('menu');
  let cost = 0;
  let kkal = 0;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].checked) {
      cost += parseFloat(menu[i].getAttribute('data-cost')); //преобразование строки в целое число
      kkal += parseFloat(menu[i].getAttribute('data-kkal'));
    }
  }
  document.getElementById('cost').innerHTML = cost + ' uah';
  document.getElementById('kkal').innerHTML = kkal + ' kkal';
}