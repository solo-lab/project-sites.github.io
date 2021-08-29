'use strict';

//* Slider 👇
var mySiema = new Siema({
  selector: '.siema__carousel', //класс к какому применим слайдер
  duration: 500, //Продолжительность слайд-перехода в миллисекундах
  // perPage: 3, //Количество отображаемых слайдов
  perPage: { //адаптивный вариант
    0: 1, // для области просмотра c 0 до 800рх
    900: 2, // 2 для области просмотра c 800рх до 1183px
    1251: 3 // 3 для области просмотра c 1183px до Npx
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 40,
  // loop: true,
});
// setInterval(() => mySiema.next(), 2000) // авто переключение через N количество милисекунд
var prev = document.querySelector('.img__prev');
var next = document.querySelector('.img__next');

prev.addEventListener('click', function() {
  mySiema.prev();
});
next.addEventListener('click', function() {
  mySiema.next();
});






//* Menu on JS (open + close) 👇

document.querySelector('.header__top--icon').addEventListener('click', function() {
    // if ( document.querySelector('body').style.overflow == "hidden" ) {
    //   document.querySelector('body').style.overflow = "visible"
    // }
    document.querySelector('.header__top--menu__open').classList.toggle('display__block');
} );

let menuLinkArr = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLinkArr.length; i++) {
  menuLinkArr[i].addEventListener('click', function() {
    document.querySelector('.header__top--menu__open').classList.add('display__block');
  } );
}