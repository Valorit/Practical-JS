document.onclick = function (event) {
  // console.log(event.target.tagName);
  event = event || window.event; //для старых браузеров
  if (event.target.tagName == 'IMG') { //указание элемента к которому применяется событие
    event.target.classList.add('bordered'); //присваивание выбранному элементу CSS класса
  }
};