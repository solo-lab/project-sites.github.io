'use strict';


//* Menu (open + close) 👇
/* var */
const mainClass__OpenCloseMenu = document.querySelector('.header__top--menu__open');
const iconClass                = document.querySelector('.header__top--icon');
let bodyTag                    = document.querySelector('body');
const сloseMenu__class         = 'menu__close';

/* Спрятать меню */
mainClass__OpenCloseMenu.classList.add(сloseMenu__class);

/* Открыть / закрыть меню --- по клику на иконку */
iconClass.addEventListener('click', function() {
    if ( bodyTag.style.overflow !== 'hidden' ) {
      bodyTag.style.overflow = 'hidden';
    } else if ( bodyTag.style.overflow == 'hidden' ) {
      bodyTag.style.removeProperty('overflow');
    }
    /* Добавить / убрать класс "сloseMenu__class" */
    mainClass__OpenCloseMenu.classList.toggle(сloseMenu__class);
});
/* Закрыть меню --- по клику на пункт меню(ссылку из меню) */
let menuLinkArr = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLinkArr.length; i++) {
  menuLinkArr[i].addEventListener('click', function() {
      if ( bodyTag.style.overflow !== 'hidden' ) {
        bodyTag.style.overflow = 'hidden';
      } else if ( bodyTag.style.overflow == 'hidden' ) {
        bodyTag.style.removeProperty('overflow');
      }
      /* Добавить класс "сloseMenu__class" */
      mainClass__OpenCloseMenu.classList.add(сloseMenu__class);
  });
}
/* -------------------------------------------------------------- */



//* Slider 👇 *//

/* ? На странице используеться слайдер с классом '.siema__carousel'? */
const sliderClassOnPage = (null !== document.querySelector('.siema__carousel'));

if ( sliderClassOnPage ){
  var mySiema = new Siema({
    selector: '.siema__carousel', /* класс к какому применим слайдер */
    duration: 500, /* Продолжительность слайд-перехода в миллисекундах */
    // perPage: 3, /* Количество отображаемых слайдов */
    perPage: { /* адаптивность добавляем */
      0: 1, /* для области просмотра c 0 до 900рх */
      900: 2, /* 2 для области просмотра c 900рх до 1251px */
      1251: 3 /* 3 для области просмотра c 1251px до ∞px */
    },
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 40,
    // loop: true, /* Зациклить слайдер ∞ */
  });
  // setInterval(() => mySiema.next(), 2000); /* авто переключение через N количество милисекунд */

  /* Кнопки слайдера 👇 */
  document.querySelector('.img__prev').addEventListener('click', function() {
      mySiema.prev(); /* 👈 */
    }
  );

  document.querySelector('.img__next').addEventListener('click', function() {
      mySiema.next(); /* 👉 */
    }
  );
}
/* -------------------------------------------------------------- */