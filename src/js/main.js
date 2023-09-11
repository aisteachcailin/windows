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
    window.addEventListener('click', e => {
      const target = e.target 
      if (!target.closest('.menu') && !target.closest('.header__menu')) { 
        document.querySelector('.menu').classList.remove('open')
      }
    })
  }

  dropdown();