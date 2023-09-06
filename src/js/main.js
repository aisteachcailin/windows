import '../scss/style.scss';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";
import swiper from './slider';

Fancybox.bind("[data-fancybox]", {
    dragToClose: false
  });