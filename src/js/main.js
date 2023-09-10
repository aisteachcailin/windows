import '../scss/style.scss';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";
import swiper from './slider';

Fancybox.bind("[data-fancybox]", {
    dragToClose: false
  });

  function dropdown() {
    document.querySelector('.header__menu').addEventListener("click", () => {
      document.querySelector('.menu').classList.toggle('open');
    })
    window.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.menu') && !target.closest('.header__menu')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        document.querySelector('.menu').classList.remove('open') // то закрываем окно навигации, удаляя активный класс
      }
    })
  }

  dropdown();