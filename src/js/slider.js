import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
        320: {
        slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        768: {
        slidesPerView: 3
        },
        1110: {
        slidesPerView: 4
        }
    }
});

export default swiper;
