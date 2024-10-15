import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiper = new Swiper('.brands__slider', {
    breakpoints: {
        768: {
            enabled: false
        }
    },
    modules: [Pagination],
    pagination: {
        el: '.slider__pagination'
    },
    slidesPerView: 'auto'
})

addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        swiper.slideTo(0, {
            animate: false
        })
    }
})