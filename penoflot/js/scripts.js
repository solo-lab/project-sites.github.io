var mySiema10 = new Siema({
  selector: '.siema__carousel', //класс к какому применим слайдер
  duration: 500, //Продолжительность слайд-перехода в миллисекундах
  // perPage: 3, //Количество отображаемых слайдов
  perPage: { //адаптивный вариант
    0: 1, // для области просмотра c 0 до 800рх
    800: 2, // 2 для области просмотра c 800рх до 1183px
    1183: 3 // 3 для области просмотра c 1183px до Npx
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 40,
  loop: true,
});
// setInterval(() => mySiema10.next(), 2000) // авто переключение через N количество милисекунд
var prev2 = document.querySelector('.img__prev');
var next2 = document.querySelector('.img__next');
prev2.addEventListener('click', function() {
  mySiema10.prev();
});
next2.addEventListener('click', function() {
  mySiema10.next();
});



document.querySelector('.menu__icon').onclick = () => {
  if ( document.querySelector('body').style.overflow == "hidden" ) {
    document.querySelector('body').style.overflow == "visible"
  }
  document.querySelector('.menu__center').classList.toggle('display__block');
  document.querySelector('.menu__center').mouseout = () => {
    document.querySelector('.menu__center').classList.add('display__block');
  }
}