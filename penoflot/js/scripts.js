'use strict';



//* Плавный скрол по якорю 👇
/* var */
const animationTime = 600; // Время анимации
const framesCount = 100;   // Количество кадров
// масив якорей на странице
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});



//* Menu (open + close) 👇
/* ? На странице используеться слайдер с классом '.siema__carousel'? */
const menuElement__OpenClose = document.querySelector('.header__top--menu__open');

if (null !== menuElement__OpenClose ) {
  /* var */
  const iconClass                = document.querySelector('.header__top--icon');
  let bodyTag                    = document.querySelector('body');
  const openMenu__class         = 'menu__open';

  /* Открыть / закрыть меню --- по клику на иконку */
  iconClass.addEventListener('click', function() {
      if ( bodyTag.style.overflow !== 'hidden' ) {
        bodyTag.style.overflow = 'hidden';
      } else if ( bodyTag.style.overflow == 'hidden' ) {
        bodyTag.style.removeProperty('overflow');
      }
      /* Добавить / убрать класс "openMenu__class" */
      menuElement__OpenClose.classList.toggle(openMenu__class);
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
        /* Добавить класс "openMenu__class" */
        menuElement__OpenClose.classList.remove(openMenu__class);
    });
  }
}
/* -------------------------------------------------------------- */



//* Slider 👇 *//

/* ? На странице используеться слайдер с классом '.siema__carousel'? */
const sliderClassOnPage = document.querySelector('.siema__carousel');

if ( null !== sliderClassOnPage ) {
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


//* Кнопка наверх 👇 */
var scrollToTopBtn = document.getElementById("button__up");
var rootElement = document.documentElement; // var rootElement = document.body;


// плавность прокрутки на верх страницы
function scrollToTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 5) {
    /* как добавляет плавность шагам на Npx = currentScroll - (currentScroll / 10)? */
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
    // setTimeout(function() {
    //   if (currentScroll != 0 ) {
    //     window.scrollTo(0, 0)
    //   }
    // }, 200)
  }
}
scrollToTopBtn.addEventListener("click", scrollToTop);


function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.10 ) {
    // Show button
    scrollToTopBtn.classList.add("button__up--position");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("button__up--position");
  }
}
document.addEventListener("scroll", handleScroll);
